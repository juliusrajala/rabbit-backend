"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pgp_1 = require("../core/pgp");
const startTx = db => cb => db.tx(txDb => cb(txDb));
exports.databaseMiddleware = (req, res, next) => {
    if (!req.db) {
        req.db = pgp_1.db;
    }
    req.startTx = startTx(req.db);
    next();
};
//# sourceMappingURL=database.js.map