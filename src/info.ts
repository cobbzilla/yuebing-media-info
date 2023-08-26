import { ApplyProfileResponse, MediaPlugin, ParsedProfile } from "yuebing-media";
import { OP_MAP, OPERATIONS, DEFAULT_PROFILES } from "./common.js";

export const mediaPlugin: MediaPlugin = {
    applyProfile: async (
        downloaded: string,
        profile: ParsedProfile,
        outDir: string,
        sourcePath: string,
    ): Promise<ApplyProfileResponse> => {
        if (profile.noop) throw new Error(`applyProfile: cannot apply noop profile: ${profile.name}`);
        if (!profile.enabled) throw new Error(`applyProfile: profile not enabled: ${profile.name}`);
        if (!profile.operation) throw new Error(`applyProfile: no operation defined for profile: ${profile.name}`);
        return await OP_MAP[profile.operation](
            downloaded,
            profile,
            `${outDir}/${profile.operation}.${profile.ext}`,
            sourcePath,
        );
    },
    operations: OPERATIONS,
    operationConfigType: () => undefined,
    defaultProfiles: DEFAULT_PROFILES,
};
