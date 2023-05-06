/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.string('tech')
    table.string('role')
    table.string('experience')
    table.string('learnings')
    table.string('stretch')
    table.string('status')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
