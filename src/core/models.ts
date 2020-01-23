import cuid from 'cuid';

// Products
export const createProduct = (db, data: Partial<Product>) => {
  const sql = `
    INSERT INTO product (product_id, product_name, price, added_datetime)
    VALUES ($[product_id], $[product_name], $[price], NOW())
  `;
  const params = {
    ...data,
    product_id: cuid()
  };
  return db.one(sql, params);
};

export const getProducts = db => {
  return db.any('SELECT * FROM product');
};

// Purchases
export const createPurchase = (db, data: Partial<Purchase>) => {
  const sql = `
    INSERT INTO purchase (purchase_id, product_id, price, buyer, made_datetime)
    VALUES ($[purchase_id], $[product_id], $[price], $[buyer], NOW())
    RETURNING purchase_id, name, price
  `;
  const params = {
    ...data,
    purchase_id: cuid()
  };

  return db.one(sql, params);
};

export const getPurchases = db => {
  return db.any('SELECT * FROM purchase');
};
