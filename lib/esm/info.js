import { OP_MAP, OPERATIONS, DEFAULT_PROFILES } from "./common.js";
import { load } from "./op/mediainfo.js";
load();
export const mediaPlugin = {
    operations: () => OPERATIONS,
    operationFunction: (op) => OP_MAP[op],
    operationConfigType: () => undefined,
    defaultProfiles: () => DEFAULT_PROFILES,
};
