# Miro translator app

## Requirements

You need an authentication key for [DeepL's API](https://www.deepl.com/pro-api).

Create a file `src/insecure_env.js` with this content:

```js
const env = {
    DEEPL_API_KEY: "your-authentication-key"
}
```

## Build

Just follow the steps in the [Miro Web SDK's Hello World](https://miro-ea.readme.io/docs/build-your-first-hello-world-app), using this project instead of the example one it says to download.
