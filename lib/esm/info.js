import { load } from "./op/mediainfo.js";
export const OP_MAP = {};
export const OPERATIONS = {};
export const DEFAULT_PROFILES = [];
export const mediaPlugin = {
    initialize: () => load(OPERATIONS, OP_MAP, DEFAULT_PROFILES),
    operations: () => OPERATIONS,
    operationFunction: (op) => OP_MAP[op],
    operationConfigType: () => undefined,
    defaultProfiles: () => DEFAULT_PROFILES,
};
