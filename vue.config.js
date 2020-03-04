// vue.config.js
const path = require("path");
module.exports = {
    devServer:{
        host: '127.0.0.1',
        public: '127.0.0.1:8080',
        disableHostCheck: true
    }//,
    //outputDir: path.resolve(__dirname, "../listnmore_backend/templates/"),
    //assetsDir: "../static/"
}
