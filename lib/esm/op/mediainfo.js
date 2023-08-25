var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { OP_MAP, OPERATIONS } from "../operations.js";
export const InfoMediainfoOperation = {
    name: "mediainfo",
    command: "mediainfo",
    analysis: true,
    minFileSize: 64, // 64 bytes, very conservative. Even an essentially empty file clocks in just over 2k
};
OPERATIONS.mediainfo = InfoMediainfoOperation;
export const mediainfo = (infile) => __awaiter(void 0, void 0, void 0, function* () {
    return { args: ["--Output=JSON", "--Full", infile] };
});
OP_MAP.mediainfo = mediainfo;
