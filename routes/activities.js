import { Router } from 'express'
import * as activitiesCtrl from '../controllers/activities.js'

const router = Router()

router.get('/new', activitiesCtrl.new)

// router.get("/:id/edit", activitiesCtrl.edit)

router.post('/', activitiesCtrl.create)

router.delete("/:id", activitiesCtrl.delete)

// router.put("/:id", activitiesCtrl.update)

export {
  router
}