import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Payment extends BaseSchema {
    protected tableName = 'payment'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('transaction_id')
            table.boolean('status').notNullable()
            table.time('payment_date').notNullable()
            table.float('payment_amount').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
