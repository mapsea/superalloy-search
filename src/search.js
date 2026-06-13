function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function numericMin(composition) {
  if (typeof composition.min === "number") return composition.min;
  if (typeof composition.max === "number") return 0;
  return 0;
}

function numericMax(composition) {
  if (typeof composition.max === "number") return composition.max;
  if (typeof composition.min === "number") return 100;
  return 100;
}

export function overlapsRange(composition, requested) {
  if (!composition) return false;
  if (composition.kind === "balance") return true;

  const alloyMin = numericMin(composition);
  const alloyMax = numericMax(composition);
  const requestedMin = typeof requested.min === "number" ? requested.min : 0;
  const requestedMax = typeof requested.max === "number" ? requested.max : 100;

  return alloyMin <= requestedMax && requestedMin <= alloyMax;
}

export function matchesAlloy(alloy, criteria) {
  const query = normalize(criteria.query);
  const sourceTypes = criteria.sourceTypes || [];
  const elementFilters = criteria.elementFilters || [];

  if (query) {
    const haystack = [alloy.name, alloy.family, ...(alloy.aliases || [])].map(normalize).join(" ");
    if (!haystack.includes(query)) return false;
  }

  if (sourceTypes.length > 0) {
    const hasSource = (alloy.sources || []).some((source) => sourceTypes.includes(source.type));
    if (!hasSource) return false;
  }

  return elementFilters.every((filter) => {
    const composition = alloy.elements[filter.symbol];
    return overlapsRange(composition, filter);
  });
}

export function filterAlloys(alloys, criteria) {
  return alloys.filter((alloy) => matchesAlloy(alloy, criteria));
}
