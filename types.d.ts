interface Product {
  product_id: string;
  product_name: string;
  price: number;
  added_datetime: Date;
}

interface User {
  user_id: string;
  phone_number: string;
  name: string;
}

interface Purchase {
  purchase_id: string;
  price: number;
  buyer: string;
  product_id: string;
  made_datetime: Date;
}
