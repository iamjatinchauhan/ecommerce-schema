import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Suppliers extends BaseSchema {
    protected tableName = 'suppliers'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('supplier_id')
            table.specificType('supplier_name', 'char').notNullable()
            table.specificType('product_name', 'char').notNullable()
            table.bigIncrements('product_id')
            table.bigInteger('category_id').unique().notNullable()
            table.integer('price').notNullable()
            table.string('description').notNullable()
            table.bigInteger('stock').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
