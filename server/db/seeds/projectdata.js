/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const { readFile } = require('node:fs/promises')
const { join } = require('node:path')
const Base64 = require('base64-arraybuffer')

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {
      id: 1,
      name: 'Buddy',
      date: '',
      blurb: '',
      description: 'text',
      tech: 'React',
      role: 'Front End Lead',
      experience: 'This was an intersting experience',
      learnings: 'Other people',
      status: 'MVP done. Stretch tasks to do',
      stretch: 'Ability to bring communication inside',
      image: Base64.encode(
        await readFile(join(__dirname, '../../public/images/international.png'))
      ),
    },
    {
      id: 2,
      name: 'Wee Man Adventures',
      date: '',
      blurb: '',
      description: 'text',
      tech: 'React',
      role: 'Front End Lead',
      experience: 'This was an intersting experience',
      learnings: 'Other people',
      status: 'MVP done. Stretch tasks to do',
      stretch: 'Ability to bring communication inside',
      image: Base64.encode(
        await readFile(join(__dirname, '../../public/images/weeman.png'))
      ),
    },
    {
      id: 3,
      name: 'Lost and Found',
      date: '',
      blurb: '',
      description: 'text',
      tech: 'React',
      role: 'Front End Lead',
      experience: 'This was an intersting experience',
      learnings: 'Other people',
      status: 'MVP done. Stretch tasks to do',
      stretch: 'Ability to bring communication inside',
      image: Base64.encode(
        await readFile(join(__dirname, '../../public/images/lostandfound.png'))
      ),
    },
    {
      id: 4,
      name: 'Dev deals',
      date: '',
      blurb: '',
      description: 'text',
      tech: 'React',
      role: 'Front End Lead',
      experience: 'This was an intersting experience',
      learnings: 'Other people',
      status: 'MVP done. Stretch tasks to do',
      stretch: 'Ability to bring communication inside',
      image: Base64.encode(
        await readFile(join(__dirname, '../../public/images/buddy.png'))
      ),
    },
  ])
}
