import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Categories extends BaseSchema {
    protected tableName = 'categories'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigInteger('product_id').unique().notNullable()
            table.integer('category_id').notNullable()
            table.specificType('name', 'char').index().notNullable()
            table.string('description')
            table.uuid('thumbnail').notNullable()
            table.index(['name', 'description'])
            table.index('name')
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
