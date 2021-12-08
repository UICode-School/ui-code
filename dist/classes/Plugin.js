"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var Plugin = /** @class */ (function () {
    function Plugin(data) {
        var plugins = JSON.parse((0, fs_1.readFileSync)('./node_modules/uicode/dist/utils/plugins.json').toString());
        plugins.push({ name: data.name, start: data.start, plugin: data.plugin });
    }
    return Plugin;
}());
exports.default = Plugin;
//# sourceMappingURL=Plugin.js.map