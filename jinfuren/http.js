var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer();
server.listen(80);
server.on("request", (req, res) => {
    var objUrl = url.parse(req.url, true);
    var address1 = objUrl.pathname.split(".")[1];
    var address2 = objUrl.pathname.split(".")[0];
    if (objUrl.pathname == "/" || objUrl.pathname == "/index") {
        fs.readFile("./index.html", (err, buf) => {
            res.end(buf);
        })
    } else if (objUrl.pathname == "/base") {
        fs.readFile("./base.html", (err, buf) => {
            res.end(buf);
        })
    } else if (objUrl.pathname == "/css/reset.css") {
        fs.readFile("./css/reset.css", (err, buf) => {
            res.end(buf);
        })
    } else if (objUrl.pathname == "/css/index.css") {
        fs.readFile("./css/index.css", (err, buf) => {
            res.end(buf);
        })
    } else if (objUrl.pathname == "/css/base.css") {
        fs.readFile("./css/base.css", (err, buf) => {
            res.end(buf);
        })
    } else if (objUrl.pathname == "/font/iconfont.css") {
        fs.readFile("./css/iconfont.css", (err, buf) => {
            res.end(buf);
        })
    } 
    else if (objUrl.pathname == "/font_2/iconfont.css") {
        fs.readFile("./font_2/iconfont.css", (err, buf) => {
            res.end(buf);
        })
    }
    else if (address1 == "jpg") {
        fs.readFile(`.${address2}.${address1}`, (err, buf) => {
            res.end(buf);
        })
    } else if (objUrl.pathname == "/js/index.js") {
        fs.readFile("./js/index.js", (err, buf) => {
            res.end(buf);
        })
    }
    else if (objUrl.pathname == "/js/base.js") {
        fs.readFile("./js/base.js", (err, buf) => {
            res.end(buf);
        })
    }
})
console.log("服务器打开了")