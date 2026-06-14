import { ELEMENT_COLUMNS } from "./data/alloys.js?v=20260614l";
import { localizedAlloy, localizedSourceNotes, sourceLabel, t } from "./i18n.js";

const SOURCE_TYPES = new Set(["official", "standard", "reference", "unverified"]);

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function normalizeSourceType(type) {
  return SOURCE_TYPES.has(type) ? type : "unverified";
}

function safeSourceUrl(value) {
  try {
    const url = new URL(String(value ?? ""));
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function renderSourceTitle(source) {
  const title = escapeHtml(source.title);
  const url = safeSourceUrl(source.url);
  return url ? `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${title}</a>` : title;
}

export function sourceRank(alloy) {
  const types = new Set((alloy.sources || []).map((source) => source.type));
  if (types.has("official")) return "official";
  if (types.has("standard")) return "standard";
  if (types.has("reference")) return "reference";
  return "unverified";
}

export function formatElement(alloy, symbol) {
  const value = alloy.elements[symbol];
  return value ? value.display : "-";
}

export function renderTableHead(container, language = "ja") {
  container.innerHTML = [
    `<th scope="col">${escapeHtml(t(language, "tableAlloy"))}</th>`,
    `<th scope="col">${escapeHtml(t(language, "tableUsage"))}</th>`,
    ...ELEMENT_COLUMNS.map((symbol) => `<th scope="col">${escapeHtml(symbol)}</th>`),
    `<th scope="col">${escapeHtml(t(language, "tableSource"))}</th>`
  ].join("");
}

export function renderTableBody(container, alloys, onSelect, language = "ja") {
  container.innerHTML = alloys.map((alloy) => {
    const rank = sourceRank(alloy);
    const localized = localizedAlloy(alloy, language);
    const cells = ELEMENT_COLUMNS.map((symbol) => `<td>${escapeHtml(formatElement(alloy, symbol))}</td>`).join("");
    return `
      <tr>
        <td><button class="link-button" type="button" data-alloy-id="${escapeHtml(alloy.id)}">${escapeHtml(localized.name)}</button></td>
        <td>${escapeHtml(localized.usage)}</td>
        ${cells}
        <td><span class="source-badge ${rank}">${escapeHtml(sourceLabel(language, rank))}</span></td>
      </tr>
    `;
  }).join("");

  container.querySelectorAll("[data-alloy-id]").forEach((button) => {
    button.addEventListener("click", () => onSelect(button.dataset.alloyId));
  });
}

export function renderCards(container, alloys, onSelect, language = "ja") {
  container.innerHTML = alloys.map((alloy) => {
    const rank = sourceRank(alloy);
    const localized = localizedAlloy(alloy, language);
    const keyElements = ELEMENT_COLUMNS
      .filter((symbol) => alloy.elements[symbol])
      .slice(0, 5)
      .map((symbol) => `<span><strong>${escapeHtml(symbol)}</strong> ${escapeHtml(formatElement(alloy, symbol))}</span>`)
      .join("");

    return `
      <article class="alloy-card">
        <div class="card-title-row">
          <div>
            <h3>${escapeHtml(localized.name)}</h3>
            <p>${escapeHtml(localized.usage)}</p>
          </div>
          <span class="source-badge ${rank}">${escapeHtml(sourceLabel(language, rank))}</span>
        </div>
        <div class="element-pills">${keyElements}</div>
        <button type="button" data-alloy-id="${escapeHtml(alloy.id)}">${escapeHtml(t(language, "detailsButton"))}</button>
      </article>
    `;
  }).join("");

  container.querySelectorAll("[data-alloy-id]").forEach((button) => {
    button.addEventListener("click", () => onSelect(button.dataset.alloyId));
  });
}

export function renderDetail(container, alloy, language = "ja") {
  const localized = localizedAlloy(alloy, language);
  const aliases = (alloy.aliases || []).join(", ");
  const detailMeta = [localized.usage, localized.category, aliases]
    .filter(Boolean)
    .join(" / ");

  const elementRows = ELEMENT_COLUMNS
    .filter((symbol) => alloy.elements[symbol])
    .map((symbol) => {
      const value = alloy.elements[symbol];
      const note = value.includes ? escapeHtml(t(language, "includedElements", { value: value.includes })) : "";
      const estimateNote = value.estimated ? escapeHtml(t(language, "estimatedNote")) : "";
      return `<tr><th scope="row">${escapeHtml(symbol)}</th><td>${escapeHtml(value.display)}${estimateNote}${note}</td></tr>`;
    })
    .join("");

  const sourceRows = (alloy.sources || []).map((source) => {
    const type = normalizeSourceType(source.type);
    const notes = localizedSourceNotes(alloy, language) || source.notes;
    return `
      <li>
        <span class="source-badge ${type}">${escapeHtml(sourceLabel(language, type))}</span>
        ${renderSourceTitle(source)}
        <p>${escapeHtml(source.company)} / ${escapeHtml(t(language, "checkedAt"))}: ${escapeHtml(source.checkedAt)}</p>
        <p>${escapeHtml(notes)}</p>
      </li>
    `;
  }).join("");

  container.innerHTML = `
    <div class="detail-body">
      <h2>${escapeHtml(localized.name)}</h2>
      <p class="muted">${escapeHtml(detailMeta)}</p>
      <h3>${escapeHtml(t(language, "propertiesHeading"))}</h3>
      <p class="detail-text">${escapeHtml(localized.properties)}</p>
      <h3>${escapeHtml(t(language, "representativeMakersHeading"))}</h3>
      <p class="detail-text">${escapeHtml(localized.representativeMakers)}</p>
      <h3>${escapeHtml(t(language, "japaneseMakersHeading"))}</h3>
      <p class="detail-text">${escapeHtml(localized.japaneseMakers)}</p>
      <h3>${escapeHtml(t(language, "compositionHeading"))}</h3>
      <table class="detail-table"><tbody>${elementRows}</tbody></table>
      <h3>${escapeHtml(t(language, "sourcesHeading"))}</h3>
      <ul class="source-list">${sourceRows}</ul>
    </div>
  `;
}
