import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as activitiesCtrl from '../controllers/activities.js'

const router = Router()

router.get('/', activitiesCtrl.index)

router.get('/new', activitiesCtrl.new)

router.get("/:id/edit",isLoggedIn,activitiesCtrl.edit)

router.get('/:id', activitiesCtrl.show)

router.post('/',isLoggedIn,activitiesCtrl.create)

router.delete("/:id",isLoggedIn, activitiesCtrl.delete)

router.put("/:id",isLoggedIn, activitiesCtrl.update)

export {
  router
}