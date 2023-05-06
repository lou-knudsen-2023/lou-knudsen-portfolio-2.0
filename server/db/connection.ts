import knexFile from './knexfile'
import knex from 'knex'
import { Projects, UpdateProject } from '../../commons/model'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const connection = knex(config)

export function getAllProjectsDB(db = connection): Promise<Projects[]> {
  return db('projects').select()
}

export function delProjectDB(id: number, db = connection): Promise<number> {
  return db('projects').delete().where('id', id)
}

export function updateProjectBD(
  id: number,
  data: UpdateProject,
  db = connection
): Promise<UpdateProject[]> {
  return db('projects').where('id', id).update(data).returning(['id', 'name'])
}

export function makeNewBD(
  formData: Projects,
  db = connection
): Promise<Projects> {
  return db('projects').insert(formData).returning(['id', 'name'])
}

export default connection
