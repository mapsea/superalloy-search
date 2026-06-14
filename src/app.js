import { alloys, ELEMENT_COLUMNS } from "./data/alloys.js?v=20260614h";
import { filterAlloys } from "./search.js?v=20260614h";
import { renderCards, renderDetail, renderTableBody, renderTableHead } from "./render.js?v=20260614h";

const state = {
  query: "",
  sourceTypes: ["official", "standard", "reference", "unverified"],
  elementFilters: []
};

const queryInput = document.querySelector("#queryInput");
const elementSelect = document.querySelector("#elementSelect");
const addElementFilter = document.querySelector("#addElementFilter");
const elementFilters = document.querySelector("#elementFilters");
const tableHead = document.querySelector("#tableHead");
const tableBody = document.querySelector("#tableBody");
const cardResults = document.querySelector("#cardResults");
const resultCount = document.querySelector("#resultCount");
const dialog = document.querySelector("#alloyDialog");
const closeDialog = document.querySelector("#closeDialog");
const dialogContent = document.querySelector("#dialogContent");

function initElementOptions() {
  elementSelect.innerHTML = ELEMENT_COLUMNS
    .map((symbol) => `<option value="${symbol}">${symbol}</option>`)
    .join("");
}

function selectedSourceTypes() {
  return [...document.querySelectorAll("input[name='sourceType']:checked")].map((input) => input.value);
}

function clampRange(filter, updatedKey) {
  filter.min = Math.max(0, Math.min(100, Number(filter.min)));
  filter.max = Math.max(0, Math.min(100, Number(filter.max)));
  if (filter.min > filter.max) {
    if (updatedKey === "min") {
      filter.max = filter.min;
    } else {
      filter.min = filter.max;
    }
  }
}

function renderElementFilters() {
  elementFilters.innerHTML = state.elementFilters.map((filter, index) => `
    <div class="range-filter" data-index="${index}">
      <div class="range-filter-header">
        <strong>${filter.symbol}</strong>
        <button type="button" data-remove="${index}">削除</button>
      </div>
      <div class="range-values">
        <label><span>最小%</span><input type="number" min="0" max="100" step="0.1" value="${filter.min}" data-min="${index}"></label>
        <label><span>最大%</span><input type="number" min="0" max="100" step="0.1" value="${filter.max}" data-max="${index}"></label>
      </div>
      <div class="dual-range" style="--min:${filter.min}; --max:${filter.max}">
        <input type="range" min="0" max="100" step="0.1" value="${filter.min}" data-min-range="${index}" aria-label="${filter.symbol} 最小値">
        <input type="range" min="0" max="100" step="0.1" value="${filter.max}" data-max-range="${index}" aria-label="${filter.symbol} 最大値">
      </div>
    </div>
  `).join("");
}

function syncFilterRow(index, activeKey) {
  const filter = state.elementFilters[index];
  const row = elementFilters.querySelector(`[data-index="${index}"]`);
  if (!filter || !row) return;

  const minInput = row.querySelector("[data-min]");
  const maxInput = row.querySelector("[data-max]");
  const minRange = row.querySelector("[data-min-range]");
  const maxRange = row.querySelector("[data-max-range]");
  const dualRange = row.querySelector(".dual-range");

  minInput.value = filter.min;
  maxInput.value = filter.max;
  minRange.value = filter.min;
  maxRange.value = filter.max;
  dualRange.style.setProperty("--min", filter.min);
  dualRange.style.setProperty("--max", filter.max);

  minRange.style.zIndex = activeKey === "min" ? "4" : "2";
  maxRange.style.zIndex = activeKey === "max" ? "4" : "3";
}

function readCriteria() {
  state.query = queryInput.value;
  state.sourceTypes = selectedSourceTypes();
  return state;
}

function showDetail(alloyId) {
  const alloy = alloys.find((item) => item.id === alloyId);
  if (!alloy) return;
  renderDetail(dialogContent, alloy);
  dialog.showModal();
}

function render() {
  const criteria = readCriteria();
  const filtered = criteria.sourceTypes.length === 0 ? [] : filterAlloys(alloys, criteria);
  resultCount.textContent = `${filtered.length}件`;
  renderTableBody(tableBody, filtered, showDetail);
  renderCards(cardResults, filtered, showDetail);
}

function updateFilter(index, key, value) {
  const filter = state.elementFilters[index];
  if (!filter) return;
  filter[key] = Number(value);
  clampRange(filter, key);
  syncFilterRow(index, key);
  render();
}

function bindRangeEvents() {
  elementFilters.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      state.elementFilters.splice(Number(button.dataset.remove), 1);
      renderElementFilters();
      bindRangeEvents();
      render();
    });
  });

  elementFilters.querySelectorAll("[data-min], [data-min-range]").forEach((input) => {
    input.addEventListener("input", () => updateFilter(Number(input.dataset.min ?? input.dataset.minRange), "min", input.value));
  });

  elementFilters.querySelectorAll("[data-max], [data-max-range]").forEach((input) => {
    input.addEventListener("input", () => updateFilter(Number(input.dataset.max ?? input.dataset.maxRange), "max", input.value));
  });
}

queryInput.addEventListener("input", render);

document.querySelectorAll("input[name='sourceType']").forEach((input) => {
  input.addEventListener("change", render);
});

addElementFilter.addEventListener("click", () => {
  const symbol = elementSelect.value;
  if (state.elementFilters.some((filter) => filter.symbol === symbol)) return;
  state.elementFilters.push({ symbol, min: 0, max: 100 });
  renderElementFilters();
  bindRangeEvents();
  render();
});

closeDialog.addEventListener("click", () => dialog.close());

initElementOptions();
renderTableHead(tableHead);
render();
