import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AffiliateProgram extends BaseSchema {
    protected tableName = 'affiliate_program'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('affiliation_id')
            table.integer('total_affiliation').notNullable()
            table.string('tag').notNullable()
            table.integer('total_product_affiliation').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
