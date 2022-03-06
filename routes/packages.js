import { Router } from 'express'
const router = Router()
import * as packagesCtrl from '../controllers/packages.js'

router.get('/', packagesCtrl.index)

router.get('/new', packagesCtrl.new)

router.get('/:id', packagesCtrl.show)

router.get("/:id/edit", packagesCtrl.edit)

router.post('/', packagesCtrl.create)

router.put("/:id", moviesCtrl.update)

router.delete("/:id", packagesCtrl.delete)


export {
	router
}