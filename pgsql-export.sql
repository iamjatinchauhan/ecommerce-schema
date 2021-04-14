CREATE TABLE "suppliers"(
    "supplier_id" BIGINT NOT NULL,
    "supplier_name" CHAR(255) NOT NULL,
    "product_name" CHAR(255) NOT NULL,
    "product_id" BIGINT NOT NULL,
    "category_id" BIGINT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "stock" BIGINT NOT NULL
);
ALTER TABLE
    "suppliers" ADD PRIMARY KEY("supplier_id");
ALTER TABLE
    "suppliers" ADD PRIMARY KEY("product_id");
ALTER TABLE
    "suppliers" ADD CONSTRAINT "suppliers_category_id_unique" UNIQUE("category_id");
CREATE TABLE "orders"(
    "customer_id" BIGINT NOT NULL,
    "order_date" TIMESTAMP(0) WITH TIME zone NOT NULL,
    "total_items" INTEGER NOT NULL
);
ALTER TABLE
    "orders" ADD PRIMARY KEY("customer_id");
CREATE TABLE "payment"(
    "transaction_id" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "payment_date" TIME(0) WITHOUT TIME ZONE NOT NULL,
    "payment_amount" DOUBLE PRECISION NOT NULL
);
ALTER TABLE
    "payment" ADD PRIMARY KEY("transaction_id");
CREATE TABLE "cart"(
    "order_id" BIGINT NOT NULL,
    "product_id" BIGINT NOT NULL,
    "cart_value" INTEGER NOT NULL,
    "billing_address" VARCHAR(255) NOT NULL,
    "quantity" INTEGER NOT NULL
);
ALTER TABLE
    "cart" ADD CONSTRAINT "cart_order_id_unique" UNIQUE("order_id");
CREATE TABLE "categories"(
    "product_id" BIGINT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "name" CHAR(255) NOT NULL,
    "description" VARCHAR(255) NULL,
    "thumbnail" UUID NOT NULL
);
CREATE INDEX "categories_name_description_index" ON
    "categories"("name", "description");
CREATE INDEX "categories_name_index" ON
    "categories"("name");
ALTER TABLE
    "categories" ADD CONSTRAINT "categories_product_id_unique" UNIQUE("product_id");
CREATE INDEX "categories_name_index" ON
    "categories"("name");
CREATE TABLE "tags"(
    "category_id" INTEGER NOT NULL,
    "category_type" CHAR(255) NOT NULL,
    "product_type" CHAR(255) NOT NULL
);
ALTER TABLE
    "tags" ADD CONSTRAINT "tags_category_id_unique" UNIQUE("category_id");
CREATE TABLE "affiliate_program"(
    "affiliation_id" BIGINT NOT NULL,
    "total_affiliation" INTEGER NOT NULL,
    "tag" VARCHAR(255) NOT NULL,
    "total_product_affiliation" INTEGER NOT NULL
);
ALTER TABLE
    "affiliate_program" ADD PRIMARY KEY("affiliation_id");
CREATE TABLE "user_credentials"(
    "cutomer_id" BIGINT NOT NULL,
    "email_id" VARCHAR(255) NOT NULL,
    "link_id" INTEGER NOT NULL
);
ALTER TABLE
    "user_credentials" ADD PRIMARY KEY("cutomer_id");
CREATE TABLE "customer"(
    "customer_id" BIGINT NOT NULL,
    "first_name" CHAR(255) NOT NULL,
    "last_name" CHAR(255) NOT NULL,
    "status" TIMESTAMP(0) WITH TIME zone NOT NULL
);
ALTER TABLE
    "customer" ADD PRIMARY KEY("customer_id");
CREATE TABLE "login_menu"(
    "link_id" INTEGER NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "user_address" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "login_menu" ADD PRIMARY KEY("link_id");
CREATE INDEX "login_menu_password_index" ON
    "login_menu"("password");
CREATE TABLE "Product"(
    "product_id" BIGINT NOT NULL,
    "name" CHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "origin_country" CHAR(255) NOT NULL,
    "image" VARCHAR(255) CHECK
        ("image" IN('')) NOT NULL,
        "create_date" DATE NOT NULL,
        "stock" INTEGER NOT NULL
);
CREATE INDEX "product_product_id_name_index" ON
    "Product"("product_id", "name");
ALTER TABLE
    "Product" ADD CONSTRAINT "product_product_id_unique" UNIQUE("product_id");
CREATE TABLE "Invoice"(
    "transaction_id" BIGINT NOT NULL,
    "order_id" BIGINT NOT NULL,
    "time_date" TIME(0) WITHOUT TIME ZONE NOT NULL,
    "seller" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Invoice" ADD PRIMARY KEY("transaction_id");
CREATE TABLE "skin-care"(
    "product_id" BIGINT NOT NULL,
    "brand" CHAR(255) NOT NULL,
    "stock" INTEGER NOT NULL,
    "product_type" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL
);
ALTER TABLE
    "skin-care" ADD PRIMARY KEY("product_id");
CREATE TABLE "electronics"(
    "product_id" BIGINT NOT NULL,
    "brand" CHAR(255) NOT NULL,
    "stock" INTEGER NOT NULL,
    "product_model" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL
);
ALTER TABLE
    "electronics" ADD PRIMARY KEY("product_id");
ALTER TABLE
    "user_credentials" ADD CONSTRAINT "user_credentials_link_id_foreign" FOREIGN KEY("link_id") REFERENCES "login_menu"("link_id");
ALTER TABLE
    "Product" ADD CONSTRAINT "product_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "suppliers"("product_id");
ALTER TABLE
    "categories" ADD CONSTRAINT "categories_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "skin-care"("product_id");
ALTER TABLE
    "categories" ADD CONSTRAINT "categories_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "electronics"("product_id");