# @umajs/plugin-csrf

## Install
```
npm i @umajs/plugin-csrf
```

## Usage
`options`均为可选项
```js
// config/plugin.config.ts

import {TransType} from '../plugins/csrf'

export default {
    'csrf': {
        enable: true,
        options: {
            excludes: ['GET', 'HEAD', 'OPTIONS'], // 不进行校验的方法，默认['GET', 'HEAD', 'OPTIONS']
            tokenKey: 'your_csrf_token', // token key，默认uma_token
            secretKey: 'your_csrf_token_key', // 秘钥 key，默认uma_token_key
            ctxTokenKey: 'your_ctx_token_key', // token 挂载在ctx上的key，默认csrfToken
            maxAge: 30 * 86400 * 1000, // cookie 有效期，默认30 * 86400 * 1000
            transType:TransType.cookie, // 向服务器请求传递token的方式，包括 cookie、header和body三种方式，默认header
            withUid: true, // token 与 uid 关联，默认不关联
            uidKey: 'your_uid_key', // uid 挂载在ctx上的key，默认 uid
        },
    },
};

```

- 插件会将 token 通过 header、token key 通过 cookie 传递给前端；

- 前端获取header方式请参考：
    - [XHR getResponseHeader](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/getResponseHeader)
    - [fetch Response](https://developer.mozilla.org/zh-CN/docs/Web/API/Response)

- 前端在请求时，将token通过 cookie 或者 header 传递即可；

- 如果设置了token与uid关联，通过 Auth 获取到 uid 需要将其挂载在 ctx 上；
