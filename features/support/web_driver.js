let wd = require('wd');


//根据您的浏览器配置创建andridDriver实例;
function createDriver() {
    return wd.promiseChainRemote({
        host: '127.0.0.1',
        port: 4723
    })
}


exports.driver = createDriver();