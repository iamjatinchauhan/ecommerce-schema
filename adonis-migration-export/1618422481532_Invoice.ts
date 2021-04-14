import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Invoice extends BaseSchema {
    protected tableName = 'Invoice'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('transaction_id')
            table.bigInteger('order_id').notNullable()
            table.time('time_date').notNullable()
            table.string('seller').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
