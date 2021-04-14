import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserCredentials extends BaseSchema {
    protected tableName = 'user_credentials'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('cutomer_id')
            table.string('email_id').notNullable()
            table.integer('link_id').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
