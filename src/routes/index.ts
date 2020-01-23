import router from 'express-promise-router';
import {
  getProducts,
  getPurchases,
  createProduct,
  createPurchase
} from '../core/models';

const handleGeneralError = (err, res) => res.sendStatus(400);

const routes = router();

routes.get('/v1/products', (req, res) => {
  getProducts(req.db)
    .then(result => res.send(result))
    .catch(err => handleGeneralError(err, res));
});

routes.get('/v1/purchases', (req, res) => {
  getPurchases(req.db)
    .then(result => res.send(result))
    .catch(err => handleGeneralError(err, res));
});

routes.post('/v1/products/create', (req, res) => {
  const { product_name, price } = req.body;
  createProduct(req.db, { product_name, price })
    .then(result => res.send(result))
    .catch(err => handleGeneralError(err, res));
});

routes.post('/v1/purchase/create', (req, res) => {
  const { product_id, buyer, price } = req.body;
  createPurchase(req.db, { product_id, buyer, price })
    .then(result => res.send(result))
    .catch(err => handleGeneralError(err, res));
});

routes.get('/v1/admin', (req, res) => {
  const options = {
    root: './src',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile('/public/admin.html', options, err => {
    if (err) {
      console.error('Error happened', err);
      res.status(200).send('Tapahtui virhe');
    }
  });
});

export default routes;
