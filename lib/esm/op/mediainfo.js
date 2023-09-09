var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const InfoMediainfoOperation = {
    name: "mediainfo",
    command: "mediainfo",
    analysis: true,
    minFileSize: 64, // 64 bytes, very conservative. Even an essentially empty file clocks in just over 2k
};
export const mediainfo = (logger, infile) => __awaiter(void 0, void 0, void 0, function* () {
    return { args: ["--Output=JSON", "--Full", infile] };
});
let loaded = false;
export const load = (OPERATIONS, OP_MAP, DEFAULT_PROFILES) => {
    if (loaded)
        return;
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
