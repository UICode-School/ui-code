"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var ws_1 = __importStar(require("./functions/ws"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var events_1 = __importDefault(require("events"));
var data_file = "./ui-code.data.json";
var exist_data_file = "./ui-code.data.json";
var acc = "API em carregamento...";
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(config, options) {
        var _this = _super.call(this) || this;
        if (options === null || options === void 0 ? void 0 : options.data_file) {
            data_file = options.data_file;
            exist_data_file = path.join(String(options.data_file));
        }
        (0, ws_1.default)(config.token);
        ws_1.socket.on("connect", function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                ws_1.socket.emit("/login-data");
                ws_1.socket.on("/login-data", function (dados) { return __awaiter(_this, void 0, void 0, function () {
                    var json, jsonr;
                    return __generator(this, function (_a) {
                        json = {
                            user_id: dados.user_id,
                            key: config.key,
                            token: config.token
                        };
                        acc = json;
                        if (!fs.existsSync(exist_data_file)) {
                            jsonr = JSON.parse(fs.readFileSync(data_file).toString());
                            jsonr.user_id = dados.user_id;
                            jsonr.key = config.key;
                            jsonr.token = config.token;
                            fs.writeFileSync(data_file, JSON.stringify(jsonr));
                        }
                        else {
                            fs.writeFile(data_file, JSON.stringify(json), function (err) {
                                if (err)
                                    throw err;
                            });
                        }
                        return [2 /*return*/];
                    });
                }); });
                this.emit("connect", {
                    name: "UICode Project's",
                    version: '1.0.0',
                    key: config.key,
                    token: config.token
                });
                return [2 /*return*/];
            });
        }); });
        ws_1.socket.on("disconnect", function (reason) {
            throw new Error("Servidor não conectado, por favor verifique os dados.");
        });
        return _this;
    }
    Object.defineProperty(Client.prototype, "account", {
        /**
         * account
         * Puxa os dados de sua conta em nosso sistema
         */
        get: function () {
            return acc;
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}(events_1.default));
exports.Client = Client;
//# sourceMappingURL=index.js.map