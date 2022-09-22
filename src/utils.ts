import { SEVERITY_NAME_MAP } from './consts';

export function matchLogLevelToOtel(levelLabel: string, levelNumber: number) : { SeverityNumber: number, SeverityText: string } {
  switch (levelLabel) {
    case "trace": {
      return { SeverityNumber: 1, SeverityText: SEVERITY_NAME_MAP[1] };
    }
    case "debug": {
      return { SeverityNumber: 5, SeverityText: SEVERITY_NAME_MAP[5] };
    }
    case "info": {
      return { SeverityNumber: 9, SeverityText: SEVERITY_NAME_MAP[9] };
    }
    case "warn": {
      return { SeverityNumber: 13, SeverityText: SEVERITY_NAME_MAP[13] };
    }
    case "error": {
      return { SeverityNumber: 17, SeverityText: SEVERITY_NAME_MAP[17] };
    }
    case "fatal": {
      return { SeverityNumber: 21, SeverityText: SEVERITY_NAME_MAP[21] };
    }
    default: {
      return { SeverityNumber: levelNumber, SeverityText: levelLabel };
    }
  }
}
