export declare class CustomHttpError extends Error {
    payload: any;
    responseCode?: number;
    statusCode: number;
    responseText?: string;
    constructor(message: string, extras: {
        statusCode: number;
        payload?: any;
        responseCode?: number;
        responseText?: string;
    });
}
