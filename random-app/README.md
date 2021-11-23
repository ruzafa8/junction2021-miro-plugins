# Miro random app

## Requirements

You need an API key for [the RANDOM.ORG API](https://api.random.org/dashboard).

Create a file `src/insecure_env.js` with this content:

```js
const env = {
    RANDOM_ORG_API_KEY: "your-api-key"
}
```

## Build

Just follow the steps in the [Miro Web SDK's Hello World](https://miro-ea.readme.io/docs/build-your-first-hello-world-app), using this project instead of the example one it says to download.
