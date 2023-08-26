import { MediaOperationFunc, MediaOperationType } from "yuebing-media";
import { MediaProfileType } from "yuebing-model";
export declare const InfoMediainfoOperation: MediaOperationType;
export declare const mediainfo: MediaOperationFunc;
export declare const load: (OPERATIONS: Record<string, MediaOperationType>, OP_MAP: Record<string, MediaOperationFunc>, DEFAULT_PROFILES: MediaProfileType[]) => void;
