const express = require('express')
const router = express.Router()

// grabbing the DB functions folder
// const db = require('../db/data/familyDb')
import {
  getAllProjectsDB,
  getProjectByIdDB,
  delProjectDB,
  addProjectDB,
} from '../db/data/project-dataDB'

// having the ability to use a router through express

router.get('/', (req, res) => {
  getAllProjectsDB()
    .then((project) => {
      console.log(project)
      res.json(project)
    })
    .catch((err) => console.log(err.message))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  getProjectByIdDB(id)
    .then((data) => {
      console.log(data)
      res.json(data)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send(err.message)
    })
})

//for adding new data to the database
router.post('/', (req, res) => {
  const data = {
    name: req.body.name,
    nicknames: req.body.nicknames,
    position: req.body.position,
    image: req.body.image,
  }

  addProjectDB(data)
    .then(([newData]) => {
      res.json(newData)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  delProjectDB(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send(err.message)
    })
})

// router.patch('/:id', (req, res) => {
//   const data = {
//     title: req.body.title,
//     content: req.body.content,
//     category: req.body.category,
//   }
//   const id = Number(req.params.id)
//   console.log(data, id)

//   updateCollectionBD(id, data)
//     .then((post) => {
//       console.log('post', post[0])
//     const xxx = post[0]
//       res.json(xxx)
//     })
//     .catch((err: Error) => {
//       res.status(500).send(err.message)
//     })
// })

export default router
