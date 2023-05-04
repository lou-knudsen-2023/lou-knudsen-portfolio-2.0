//The apiClient.ts file exports a function called getWidgetsCS(),
//which uses the superagent library to make an HTTP GET request to the /api/v1/widgets/ endpoint.
//This function returns a promise that resolves to an array of Widget objects.

import request from 'superagent'
import { Widget, WidgetData } from '../models/Widget'

//this url to the widgets.ts file is defined in the server.ts file
//it connects to the routes -> widgets.ts
const widgetUrl = '/api/v1/widgets/'

//When getWidgetsCS() is called, it sends an HTTP GET request to the specified endpoint (api/v1/widgets, or widgets.ts) using the request.get() method.
//This method returns a promise that resolves to an object containing the response from the server.

export function getWidgetsCS(): Promise<Widget[]> {
  return request.get(widgetUrl).then((responseObj) => responseObj.body)
}

export function addWidgets(obj: WidgetData): Promise<Widget> {
  return request
    .post('/api/v1/widgets')
    .send(obj)
    .then((res) => {
      return res.body
    })
}

export function getAWidgetsCS(id: number): Promise<Widget> {
  return request.get(`/api/v1/widgets/${id}`).then((res) => {
    return res.body
  })
}

export function updateAWidgetCS(id: number, obj: WidgetData): Promise<Widget> {
  console.log(request)
  return request
    .patch(`/api/v1/widgets/${id}`)
    .send(obj)
    .then((res) => {
      return res.body
    })
}

//deleting
export function delWidgetsCS(id: number): Promise<number> {
  return request
    .delete(`/api/v1/widgets/${id}`)
    .then((responseObj) => responseObj.body)
}
