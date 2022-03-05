import { Router } from 'express'
const router = Router()
import * as packagesCtrl from '../controllers/packages.js'

// GET /movies/new
router.get('/new', packagesCtrl.new)

export {
	router
}