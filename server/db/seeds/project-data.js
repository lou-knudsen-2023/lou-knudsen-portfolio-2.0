/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, 
     name: 'Buddy',
     description: "",
     tech: "",
     role: "",
     experience: "",
     learnings: "",
     status: "",
     stretch: "" },
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
    {id: 4, colName: 'rowValue3'}
  ]);
};


table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.string('tech')
    table.string('role')
    table.string('experience')
    table.string('learnings')
    table.string('status')