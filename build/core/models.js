"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cuid_1 = __importDefault(require("cuid"));
exports.createProduct = (db, data) => {
    const sql = `
    INSERT INTO product (product_id, product_name, price, added_datetime)
    VALUES ($[product_id], $[product_name], $[price], $[datetime])
  `;
    const params = Object.assign(Object.assign({}, data), { product_id: cuid_1.default(), datetime: new Date() });
    return db.one(sql, params);
};
exports.getProducts = db => {
    return db.any('SELECT * FROM product');
};
// Purchases
exports.createPurchase = (db, data) => {
    const sql = `
    INSERT INTO purchase (purchase_id, product_id, price, buyer, made_datetime)
    VALUES ($[purchase_id], $[product_id], $[price], $[buyer], $[datetime])
  `;
    const params = Object.assign(Object.assign({}, data), { purchase_id: cuid_1.default(), datetime: new Date() });
    return db.one(sql, params);
};
exports.getPurchases = db => {
    return db.any('SELECT * FROM purchase');
};
//# sourceMappingURL=models.js.map