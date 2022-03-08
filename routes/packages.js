import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as packagesCtrl from '../controllers/packages.js'

const router = Router()


router.get('/', packagesCtrl.index)

router.get('/new', packagesCtrl.new)

router.get('/:id', packagesCtrl.show)

router.get("/:id/edit", packagesCtrl.edit)

router.post('/',isLoggedIn, packagesCtrl.create)

router.post("/:id/tickets", packagesCtrl.createTicket)

// router.post('/:id/activities',packagesCtrl.addToActivity);

router.delete("/:id",isLoggedIn, packagesCtrl.delete)

router.put("/:id",isLoggedIn, packagesCtrl.update)


export {
	router
}