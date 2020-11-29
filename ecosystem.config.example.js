module.exports = {
    apps: [{
        name: "react-url-shortener",
        script: "./scripts/start.js",
        env: {
            PM2_SERVE_PATH: '.',
            PM2_SERVE_PORT: 3000,
            PM2_SERVE_SPA: 'true',
            PM2_SERVE_HOMEPAGE: './index.html',
            NODE_ENV: "production",
            REACT_APP_API_HOST: "localhost",
            REACT_APP_API_PORT: 3333,
            REACT_APP_API_ADDRESS: "http://$REACT_APP_API_HOST:$REACT_APP_API_PORT",
        },
    }]
}
