"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = require("./middleware/database");
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const port = 3000;
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(database_1.databaseMiddleware);
app.use('/api', routes_1.default);
app.listen(3000);
//# sourceMappingURL=index.js.map