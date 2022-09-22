import os from 'os';
import pino, { version } from 'pino';
import { randomUUID } from 'crypto';

import { matchLogLevelToOtel } from './utils';
import { unixEpochTimeToNanosec } from "./time";
import { REVERED_SEVERITY_NAME_MAP } from './consts';

const a = pino({
  customLevels: REVERED_SEVERITY_NAME_MAP,
  useOnlyCustomLevels: true,
  
  formatters: {
    level(label, number) {
      const mapping = matchLogLevelToOtel(label, number);
      return mapping;
    },
  },
  base: {
    InstrumentationScope: { myLogger: version },
    Resource: {
      "service.name": "avi-service" ?? "unknown_service",
      "service.namespace": "avi-namespace",
      "service.instance.id": "avi-id" ?? randomUUID(),
      "service.version": "v1.0.0",
      "os.type": os.type().toLowerCase(),
      "process.pid": process.pid,
      "process.command": process.argv0,
      "process.executable.path": process.argv[0],
      "process.command_line": process.argv.toString(),
      "process.command_args": process.argv,
      "process.owner": os.userInfo().username,
      "process.runtime.name": "nodejs",
      "process.versions.node": process.versions.node,
      // "host.name": os.hostname(),
      // "host.arch": process.arch,
      // "host.image.name": process.platform,
      // "host.image.version": os.release(),
    },
  },
  messageKey: 'Body',
  timestamp: () => `,Timestamp: ${unixEpochTimeToNanosec(Date.now())}`,
});

a.info({a: 5}, 'avi is implemented');
