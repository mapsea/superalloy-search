# Mainstream Titanium Alloy Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add mainstream titanium alloy grades to the searchable alloy database and publish the regenerated site data.

**Architecture:** Keep `data/alloys.csv` as the source of truth and regenerate `src/data/generated/alloys.js`. Add a focused data regression test so future edits keep the mainstream titanium set visible.

**Tech Stack:** Static ES modules, CSV source data, `scripts/build-data.py`, browser-based HTML tests.

---

### Task 1: Add Titanium Coverage Test

**Files:**
- Modify: `tests/data-tests.html`

- [ ] Add a test that expects the database to contain a representative mainstream titanium alloy set including CP grades, alpha/near-alpha, alpha-beta, and beta alloys.
- [ ] Run the test before editing the CSV; it should fail because the new titanium IDs are not present yet.

### Task 2: Add Titanium Alloy Rows

**Files:**
- Modify: `data/alloys.csv`

- [ ] Append new rows for mainstream titanium alloys with Japanese, Simplified Chinese, and English display fields populated.
- [ ] Use source-backed reference compositions and mark titanium balance values as estimated where Ti is the remainder.

### Task 3: Regenerate And Verify

**Files:**
- Regenerate: `src/data/generated/alloys.js`
- Modify: `src/data/alloys.js`
- Modify: `src/app.js`
- Modify: `tests/data-tests.html`

- [ ] Run `python3 scripts/build-data.py`.
- [ ] Update the expected record count from 500 to the new total.
- [ ] Bump cache query strings for GitHub Pages.
- [ ] Run data/search verification commands.
- [ ] Commit and push to `origin/main`.
