import { MobilettoLogger } from "mobiletto-base";
import { ApplyProfileResponse, MediaOperationFunc, MediaOperationType } from "yuebing-media";
import { MediaProfileType } from "yuebing-model";

export const InfoMediainfoOperation: MediaOperationType = {
    name: "mediainfo",
    command: "mediainfo",
    analysis: true,
    minFileSize: 64, // 64 bytes, very conservative. Even an essentially empty file clocks in just over 2k
};

export const mediainfo: MediaOperationFunc = async (
    logger: MobilettoLogger,
    infile: string,
): Promise<ApplyProfileResponse> => {
    return { args: ["--Output=JSON", "--Full", infile] };
};

let loaded = false;

export const load = (
    OPERATIONS: Record<string, MediaOperationType>,
    OP_MAP: Record<string, MediaOperationFunc>,
    DEFAULT_PROFILES: MediaProfileType[],
) => {
    if (loaded) return;
    loaded = true;

    OPERATIONS.mediainfo = InfoMediainfoOperation;
    OP_MAP.mediainfo = mediainfo;

    DEFAULT_PROFILES.push({
        name: "mediainfo",
        operation: "mediainfo",
        ext: "json",
        contentType: "application/json",
    });
};
