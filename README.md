# React URL Shortener
This is the frontend for 'Adonis URL Shortener', a URL Shortener made as a backend coding challenge. This application intends to be a user-friendly interface to support the challenge. This application was made using `create-react-app` and ejecting it in order to expose the configuration.

## Building
React apps should run in production using a minified build which is never commited.
```
    yarn build
```
This creates a `build/` folder which packs all source code along with environment variables from .env.

## Deployment
The project can be deployed as SPA by using `serve` and `pm2`.

```
    yarn global add serve
    yarn global add pm2
```

## Important notes
1. The default configurations from `ecosystem.config.example.js` should be ready to go since REACT_APP variables are injected during build time. This also means env variables can only be reloaded by rebuilding the whole application.
2. Feature `Copy to clipboard` only works in a secure environment (either HTTPS or localhost)
3. Jest tests will not work without further configuration as the application relies on `jsconfig.json` to know which is the root folder. Jest is currently not aware of it.
4. Estlint / prettier should be improved in order to keep the code tidy and consistent among the team