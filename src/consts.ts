interface SeverityMap {
  [severityNumber: number]: string;
}
interface SwappedSeverityMap {
  [severity: string]: number;
}
function buildSwappedSevNameMap(sevMap: SeverityMap) : SwappedSeverityMap {
  const swapped : SwappedSeverityMap = {};
  for (const key in Object.keys(sevMap)) {
    const newKey = sevMap[key];
    swapped[newKey] = Number(newKey);
  }
  return swapped;
}

export const FATAL_SEVERITY_NUMBER = 21;
/**
 * If the source format has only a single severity that matches the meaning of the range
 * then it is recommended to assign that severity the smallest value of the range.
 * https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/logs/data-model.md#mapping-of-severitynumber
 */
export const SEVERITY_NUMBER_MAP = {
  10: 1,
  20: 5,
  30: 9,
  40: 13,
  50: 17,
  60: FATAL_SEVERITY_NUMBER
};

// https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/logs/data-model.md#displaying-severity
export const SEVERITY_NAME_MAP: SeverityMap = {
  1: 'TRACE',
  2: 'TRACE2',
  3: 'TRACE3',
  4: 'TRACE4',
  5: 'DEBUG',
  6: 'DEBUG2',
  7: 'DEBUG3',
  8: 'DEBUG4',
  9: 'INFO',
  10: 'INFO2',
  11: 'INFO3',
  12: 'INFO4',
  13: 'WARN',
  14: 'WARN2',
  15: 'WARN3',
  16: 'WARN4',
  17: 'ERROR',
  18: 'ERROR2',
  19: 'ERROR3',
  20: 'ERROR4',
  21: 'FATAL',
  22: 'FATAL2',
  23: 'FATAL3',
  24: 'FATAL4'
};

export const REVERED_SEVERITY_NAME_MAP = { ...buildSwappedSevNameMap(SEVERITY_NAME_MAP), 'trace': 1, 'debug': 5, 'info': 9, 'warn': 13, 'error': 17, 'fatal': 21 };
