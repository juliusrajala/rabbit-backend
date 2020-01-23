"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const models_1 = require("../core/models");
const handleGeneralError = (err, res) => res.sendStatus(400);
const routes = express_promise_router_1.default();
routes.get('/v1/products', (req, res) => {
    models_1.getProducts(req.db)
        .then(result => res.send(result))
        .catch(err => handleGeneralError(err, res));
});
routes.get('/v1/purchases', (req, res) => {
    models_1.getPurchases(req.db)
        .then(result => res.send(result))
        .catch(err => handleGeneralError(err, res));
});
exports.default = routes;
//# sourceMappingURL=index.js.map