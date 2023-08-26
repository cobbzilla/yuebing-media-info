import { ApplyProfileResponse, MediaOperationFunc, MediaOperationType } from "yuebing-media";
import { OP_MAP, OPERATIONS, DEFAULT_PROFILES } from "../common.js";

export const InfoMediainfoOperation: MediaOperationType = {
    name: "mediainfo",
    command: "mediainfo",
    analysis: true,
    minFileSize: 64, // 64 bytes, very conservative. Even an essentially empty file clocks in just over 2k
};

export const mediainfo: MediaOperationFunc = async (infile: string): Promise<ApplyProfileResponse> => {
    return { args: ["--Output=JSON", "--Full", infile] };
};

export const load = () => {
    OPERATIONS.mediainfo = InfoMediainfoOperation;
    OP_MAP.mediainfo = mediainfo;

    DEFAULT_PROFILES.push({
        name: "mediainfo",
        operation: "mediainfo",
        ext: "json",
        contentType: "application/json",
    });
};
