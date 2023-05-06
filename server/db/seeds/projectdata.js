/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {
      id: 1,
      name: 'Buddy',
      description: 'text',
      tech: 'React',
      role: 'Front End Lead',
      experience: 'This was an intersting experience',
      learnings: 'Other people',
      status: 'MVP done. Stretch tasks to do',
      stretch: 'Ability to bring communication inside',
    },
    {
      id: 2,
      name: 'Wee Man Adventures',
      description: 'text',
      tech: 'React',
      role: 'Front End Lead',
      experience: 'This was an intersting experience',
      learnings: 'Other people',
      status: 'MVP done. Stretch tasks to do',
      stretch: 'Ability to bring communication inside',
    },
    {
      id: 3,
      name: 'Lost and Found',
      description: 'text',
      tech: 'React',
      role: 'Front End Lead',
      experience: 'This was an intersting experience',
      learnings: 'Other people',
      status: 'MVP done. Stretch tasks to do',
      stretch: 'Ability to bring communication inside',
    },
    {
      id: 4,
      name: 'Dev deals',
      description: 'text',
      tech: 'React',
      role: 'Front End Lead',
      experience: 'This was an intersting experience',
      learnings: 'Other people',
      status: 'MVP done. Stretch tasks to do',
      stretch: 'Ability to bring communication inside',
    },
  ])
}
