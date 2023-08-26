import { MediaOperationFunc, MediaOperationType } from "yuebing-media";
import { MediaProfileType } from "yuebing-model";

export const OP_MAP: Record<string, MediaOperationFunc> = {};

export const OPERATIONS: Record<string, MediaOperationType> = {};

export const DEFAULT_PROFILES: MediaProfileType[] = [];
