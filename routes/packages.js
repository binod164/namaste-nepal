import { Router } from 'express'
const router = Router()
import * as packagesCtrl from '../controllers/packages.js'

router.get('/', packagesCtrl.index)

router.get('/new', packagesCtrl.new)

router.get('/:id', packagesCtrl.show)

router.post('/', packagesCtrl.create)

router.delete("/:id", packagesCtrl.delete)


export {
	router
}