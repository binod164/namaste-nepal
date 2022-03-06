import { Router } from 'express'
const router = Router()
import * as packagesCtrl from '../controllers/packages.js'

router.get('/', packagesCtrl.index)

router.get('/new', packagesCtrl.new)

router.get('/:id', packagesCtrl.show)

router.get("/:id/edit", packagesCtrl.edit)

router.post('/', packagesCtrl.create)

router.post("/:id/tickets", packagesCtrl.createTicket)

router.delete("/:id", packagesCtrl.delete)


router.put("/:id", packagesCtrl.update)


export {
	router
}