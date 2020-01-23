CREATE TABLE public.user (
  user_id character varying(25) PRIMARY KEY NOT NULL,
  phone_number character varying(25) NOT NULL,
  name character varying(25) NOT NULL
);

CREATE TABLE public.product (
  product_id character varying(25) PRIMARY KEY NOT NULL,
  product_name character varying(512) NOT NULL,
  price numeric NOT NULL,
  added_datetime timestamp with time zone NOT NULL DEFAULT NOW()
);

CREATE TABLE public.purchase (
  purchase_id character varying(25) PRIMARY KEY NOT NULL,
  price numeric NOT NULL,
  buyer character varying(25) NOT NULL REFERENCES public.user(user_id),
  product_id character varying(25) NOT NULL REFERENCES public.product(product_id),
  made_datetime timestamp with time zone NOT NULL DEFAULT NOW()
);

INSERT INTO product (product_id, product_name, price)
VALUES ('xiz', 'Kalja', 1.5)