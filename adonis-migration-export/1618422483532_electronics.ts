import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Electronics extends BaseSchema {
    protected tableName = 'electronics'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('product_id')
            table.specificType('brand', 'char').notNullable()
            table.integer('stock').notNullable()
            table.string('product_model').notNullable()
            table.integer('price').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
