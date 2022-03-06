import { Package } from '../models/vacationPackage.js'


function newPackage(req, res) {
  res.render('packages/new')
}

function create(req, res) {
  const vacationPackage = new Package(req.body)
  vacationPackage.save(function(err) {
		if (err) return res.redirect('/packages/new')
    res.redirect('/packages/new')
  })
}

export {
  newPackage as new,
  create
}