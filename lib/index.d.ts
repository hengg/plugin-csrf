import * as Koa from 'koa';
import { Uma } from '@umajs/core';
export declare enum TransType {
    'header' = 0,
    'cookie' = 1,
    'body' = 2
}
export declare type Options = {
    tokenKey?: string;
    secretKey?: string;
    excludes?: Array<string>;
    maxAge?: number;
    transType?: TransType;
    ctxTokenKey?: string;
    withUid?: boolean;
    uidKey?: string;
};
declare const _default: (uma: Uma, opts?: Options) => Koa.Middleware;
export default _default;
