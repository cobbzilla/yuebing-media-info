import { MediaOperationFunc, MediaOperationType, MediaPlugin } from "yuebing-media";
import { load } from "./op/mediainfo.js";
import { MediaProfileType } from "yuebing-model";

export const OP_MAP: Record<string, MediaOperationFunc> = {};

export const OPERATIONS: Record<string, MediaOperationType> = {};

export const DEFAULT_PROFILES: MediaProfileType[] = [];

export const mediaPlugin: MediaPlugin = {
    initialize: () => load(OPERATIONS, OP_MAP, DEFAULT_PROFILES),
    operations: () => OPERATIONS,
    operationFunction: (op: string) => OP_MAP[op],
    operationConfigType: () => undefined,
    defaultProfiles: () => DEFAULT_PROFILES,
};
