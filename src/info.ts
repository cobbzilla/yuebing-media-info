import { MediaPlugin } from "yuebing-media";
import { OP_MAP, OPERATIONS, DEFAULT_PROFILES } from "./common.js";
import { load } from "./op/mediainfo.js";

export const mediaPlugin: MediaPlugin = {
    initialize: load,
    operations: () => OPERATIONS,
    operationFunction: (op: string) => OP_MAP[op],
    operationConfigType: () => undefined,
    defaultProfiles: () => DEFAULT_PROFILES,
};
