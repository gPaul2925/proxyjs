const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.routes();
    }

    routes() {
        this.app.use("/", require('./routes/proxy'));
    }

    listen(port, ip){
        this.app.listen(port, ip, () => {
            console.log('Escuchando en el puerto: ', port);
        });
    }
}
module.exports = Server;