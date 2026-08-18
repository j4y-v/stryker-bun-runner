// @bun
// src/coverage/preload-logic.ts
import { appendFileSync } from "fs";
function getPreloadConfig() {
  return {
    syncPort: process.env.__STRYKER_SYNC_PORT__,
    coverageFile: process.env.__STRYKER_COVERAGE_FILE__,
    activeMutant: process.env.__STRYKER_ACTIVE_MUTANT__
  };
}
function shouldCollectCoverage(config) {
  return !config.activeMutant && !!config.coverageFile;
}
function initializeStrykerNamespace(globalObj) {
  const g = globalObj;
  g.__stryker__ ??= { mutantCoverage: { static: {}, perTest: {} } };
  const strykerGlobal = g.__stryker__;
  strykerGlobal.mutantCoverage ??= { static: {}, perTest: {} };
  g.__mutantCoverage__ = strykerGlobal.mutantCoverage;
  return strykerGlobal;
}
function setActiveMutant(strykerNamespace, activeMutant) {
  strykerNamespace.activeMutant = activeMutant;
}
function detectGapWindowBleed(staticCountsAtLastBoundary, staticCoverageNow) {
  if (!staticCoverageNow) {
    return [];
  }
  const bledIds = [];
  for (const [id, countNow] of Object.entries(staticCoverageNow)) {
    const countAtBoundary = staticCountsAtLastBoundary.get(id) ?? 0;
    if (countNow > countAtBoundary) {
      bledIds.push(id);
    }
  }
  return bledIds;
}
function formatCoverageData(mutantCoverage, counterToName, lateHits = []) {
  if (!mutantCoverage) {
    return { perTest: {}, static: [] };
  }
  const perTest = {};
  for (const [testId, coverage] of Object.entries(mutantCoverage.perTest ?? {})) {
    const actualName = counterToName.get(testId) ?? testId;
    perTest[actualName] = Object.keys(coverage);
  }
  const staticCoverage = Object.keys(mutantCoverage.static ?? {});
  return {
    perTest,
    static: staticCoverage,
    ...lateHits.length > 0 ? { lateHits: [...lateHits] } : {}
  };
}
function writeCoverageToFile(coverageFile, data) {
  appendFileSync(coverageFile, `${JSON.stringify(data)}
`, "utf8");
}
function startOrphanWatchdog(deps) {
  const originalPpid = deps.getPpid();
  let fired = false;
  const intervalId = setInterval(() => {
    if (fired || deps.getPpid() === originalPpid) {
      return;
    }
    fired = true;
    deps.onOrphaned();
  }, deps.intervalMs ?? 1000);
  intervalId.unref();
  return () => {
    clearInterval(intervalId);
  };
}
export {
  writeCoverageToFile,
  startOrphanWatchdog,
  shouldCollectCoverage,
  setActiveMutant,
  initializeStrykerNamespace,
  getPreloadConfig,
  formatCoverageData,
  detectGapWindowBleed
};
