// this is the functions page dealing directly with the database

import connection from '../connection'
import { Projects } from '../../../commons/model'

export function getAllProjectsDB(db = connection): Promise<Projects[]> {
  return db('projects').select()
}

//other functions in here will include pulling family members by id
export function getProjectByIdDB(
  id: number,
  db = connection
): Promise<Projects> {
  return db('projects').select().where('id', id).first()
}

export function delProjectDB(id: number, db = connection): Promise<number> {
  return db('projects').del().where('id', id)
}

export function addProjectDB(
  Data: Projects,
  db = connection
): Promise<Projects> {
  return db('projects').insert(Data).returning(['id', 'name'])
}
