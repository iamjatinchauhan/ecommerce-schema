import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tags extends BaseSchema {
    protected tableName = 'tags'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.integer('category_id').unique().notNullable()
            table.specificType('category_type', 'char').notNullable()
            table.specificType('product_type', 'char').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
