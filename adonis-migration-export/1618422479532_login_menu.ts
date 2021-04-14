import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class LoginMenu extends BaseSchema {
    protected tableName = 'login_menu'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('link_id')
            table.string('password').index().notNullable()
            table.string('user_address').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
