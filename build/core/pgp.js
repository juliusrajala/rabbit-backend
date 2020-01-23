"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pgPromise = __importStar(require("pg-promise"));
const pgp = pgPromise();
const connectionOptions = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    database: 'rabbit',
    port: (process.env.PGPORT || 5432)
};
exports.db = pgp(connectionOptions);
exports.default = pgp;
//# sourceMappingURL=pgp.js.map