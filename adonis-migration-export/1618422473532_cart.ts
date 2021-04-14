import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cart extends BaseSchema {
    protected tableName = 'cart'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigInteger('order_id').unique().notNullable()
            table.bigInteger('product_id').notNullable()
            table.integer('cart_value').notNullable()
            table.string('billing_address').notNullable()
            table.integer('quantity').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
