import * as express from 'express'
import * as noteController from '../controllers/note'
import { getCounter } from './../services/counter'

const router = express.Router()

router.use('/counter', (req, res) => res.send({counter: getCounter()}))
router.use('/notes', noteController.getNotes)
router.post('/', noteController.postNote)

export default router
