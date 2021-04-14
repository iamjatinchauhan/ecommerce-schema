import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
    protected tableName = 'orders'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('customer_id')
            table.specificType('order_date', 'timestamptz').notNullable()
            table.integer('total_items').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
