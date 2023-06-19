export declare const validateHashes: (hashes: string) => string[];
export declare const validateAddress: (address: string) => string;
export declare const validateAddresses: (addresses: string) => string[];
export declare const validateMappedAddresses: (addresses: string) => {
    contract: string;
    source: string;
}[];
export declare const validateDepth: (depthStr: string) => number;
export declare const parseFilename: (outputFileName: string, hashes: string[], value?: boolean) => string;
