import { ELEMENT_COLUMNS, SOURCE_LABELS } from "./data/alloys.js";

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

export function sourceRank(alloy) {
  const types = new Set((alloy.sources || []).map((source) => source.type));
  if (types.has("official")) return "official";
  if (types.has("reference")) return "reference";
  return "unverified";
}

export function formatElement(alloy, symbol) {
  const value = alloy.elements[symbol];
  return value ? value.display : "-";
}

export function renderTableHead(container) {
  container.innerHTML = [
    "<th>合金</th>",
    "<th>系統</th>",
    ...ELEMENT_COLUMNS.map((symbol) => `<th>${escapeHtml(symbol)}</th>`),
    "<th>出典</th>"
  ].join("");
}

export function renderTableBody(container, alloys, onSelect) {
  container.innerHTML = alloys.map((alloy) => {
    const rank = sourceRank(alloy);
    const cells = ELEMENT_COLUMNS.map((symbol) => `<td>${escapeHtml(formatElement(alloy, symbol))}</td>`).join("");
    return `
      <tr>
        <td><button class="link-button" type="button" data-alloy-id="${escapeHtml(alloy.id)}">${escapeHtml(alloy.name)}</button></td>
        <td>${escapeHtml(alloy.family)}</td>
        ${cells}
        <td><span class="source-badge ${rank}">${escapeHtml(SOURCE_LABELS[rank])}</span></td>
      </tr>
    `;
  }).join("");

  container.querySelectorAll("[data-alloy-id]").forEach((button) => {
    button.addEventListener("click", () => onSelect(button.dataset.alloyId));
  });
}

export function renderCards(container, alloys, onSelect) {
  container.innerHTML = alloys.map((alloy) => {
    const rank = sourceRank(alloy);
    const keyElements = ELEMENT_COLUMNS
      .filter((symbol) => alloy.elements[symbol])
      .slice(0, 5)
      .map((symbol) => `<span><strong>${escapeHtml(symbol)}</strong> ${escapeHtml(formatElement(alloy, symbol))}</span>`)
      .join("");

    return `
      <article class="alloy-card">
        <div class="card-title-row">
          <div>
            <h3>${escapeHtml(alloy.name)}</h3>
            <p>${escapeHtml(alloy.family)}</p>
          </div>
          <span class="source-badge ${rank}">${escapeHtml(SOURCE_LABELS[rank])}</span>
        </div>
        <div class="element-pills">${keyElements}</div>
        <button type="button" data-alloy-id="${escapeHtml(alloy.id)}">詳細を見る</button>
      </article>
    `;
  }).join("");

  container.querySelectorAll("[data-alloy-id]").forEach((button) => {
    button.addEventListener("click", () => onSelect(button.dataset.alloyId));
  });
}

export function renderDetail(container, alloy) {
  const elementRows = ELEMENT_COLUMNS
    .filter((symbol) => alloy.elements[symbol])
    .map((symbol) => {
      const value = alloy.elements[symbol];
      const note = value.includes ? ` (${escapeHtml(value.includes)}含む)` : "";
      return `<tr><th>${escapeHtml(symbol)}</th><td>${escapeHtml(value.display)}${note}</td></tr>`;
    })
    .join("");

  const sourceRows = (alloy.sources || []).map((source) => `
    <li>
      <span class="source-badge ${escapeHtml(source.type)}">${escapeHtml(SOURCE_LABELS[source.type] || source.type)}</span>
      <a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.title)}</a>
      <p>${escapeHtml(source.company)} / 確認日: ${escapeHtml(source.checkedAt)}</p>
      <p>${escapeHtml(source.notes)}</p>
    </li>
  `).join("");

  container.innerHTML = `
    <div class="detail-body">
      <h2>${escapeHtml(alloy.name)}</h2>
      <p class="muted">${escapeHtml(alloy.family)} / ${escapeHtml((alloy.aliases || []).join(", "))}</p>
      <h3>成分</h3>
      <table class="detail-table"><tbody>${elementRows}</tbody></table>
      <h3>出典</h3>
      <ul class="source-list">${sourceRows}</ul>
    </div>
  `;
}
