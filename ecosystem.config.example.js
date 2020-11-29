module.exports = {
    apps: [{
        name: "react-url-shortener",
        script: "./scripts/start.js",
        env: {
            NODE_ENV: "production",
            REACT_APP_API_HOST: "127.0.0.1",
            REACT_APP_API_PORT: 3333,
            REACT_APP_API_ADDRESS: "http://$REACT_APP_API_HOST:$REACT_APP_API_PORT",
        },
    }]
}
