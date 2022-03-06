import { Router } from 'express'
import * as activitiesCtrl from '../controllers/activities.js'

const router = Router()

router.get('/new', activitiesCtrl.new)

router.post('/', activitiesCtrl.create)

export {
  router
}