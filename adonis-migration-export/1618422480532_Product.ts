import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Product extends BaseSchema {
    protected tableName = 'Product'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigInteger('product_id').unique().notNullable()
            table.specificType('name', 'char').notNullable()
            table.integer('price').notNullable()
            table.specificType('origin_country', 'char').notNullable()
            table.enu('image').notNullable()
            table.date('create_date').notNullable()
            table.integer('stock').notNullable()
            table.index(['product_id', 'name'])
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
