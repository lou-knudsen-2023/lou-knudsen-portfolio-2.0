//The apiClient.ts file exports a function called getWidgetsCS(),
//which uses the superagent library to make an HTTP GET request to the /api/v1/widgets/ endpoint.
//This function returns a promise that resolves to an array of Widget objects.

import request from 'superagent'
import { Projects } from '../../commons/model'

//this url to the widgets.ts file is defined in the server.ts file
//it connects to the routes -> widgets.ts
const projectURL = '/api/v1/projects/'

//When getWidgetsCS() is called, it sends an HTTP GET request to the specified endpoint (api/v1/widgets, or widgets.ts) using the request.get() method.
//This method returns a promise that resolves to an object containing the response from the server.

export function getAllProjectsCS(): Promise<Projects[]> {
  return request.get(projectURL)
  .then((responseObj) => responseObj.body)
  console.log(responseObj.body)
}

export function delProjectCS(id: number) {
  return request.delete(`/api/v1/projects/${id}`).then((res) => {
    return res.body
  })
}

export function updateProjectCS(id: number, obj: Projects): Promise<Projects> {
  return request
    .patch(`/api/v1/projects/${id}`)
    .send(obj)
    .then((res) => {
      return res.body
    })
}

export function getProjectCS(id: number) {
  console.log(id)
  return request
    .get(`/api/v1/projects/${id}`) // call internal api here
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      return err.message
    })
}

export function makeNewCS(newThing: Projects) {
  return request
    .post(projectURL)
    .send(newThing)
    .then((res) => {
      return res.body
    })
}
