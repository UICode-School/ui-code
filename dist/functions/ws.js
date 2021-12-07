"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
var socket_io_client_1 = require("socket.io-client");
var BASE_URL = 'http://3.88.206.190:7777';
var socket;
exports.socket = socket;
function web_server(token) {
    exports.socket = socket = (0, socket_io_client_1.connect)(BASE_URL, {
        query: {
            token: token
        }
    });
}
exports.default = web_server;
//# sourceMappingURL=ws.js.map