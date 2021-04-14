import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Customer extends BaseSchema {
    protected tableName = 'customer'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('customer_id')
            table.specificType('first_name', 'char').notNullable()
            table.specificType('last_name', 'char').notNullable()
            table.specificType('status', 'timestamptz').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
