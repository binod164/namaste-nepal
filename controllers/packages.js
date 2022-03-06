import { Profile } from '../models/profile.js'

function newPackage(req, res) {
  res.render('packages/new',{
  title:'Add Package'
  })
}

function create(req, res) {
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  const vacationPackage = new Profile(req.body)
  vacationPackage.save(function(err) {
		if (err) return res.render('/packages/new')
    res.redirect('/packages')
  })
}

function index(req, res) {
  Profile.find({}, function(err, packages){
    res.render("packages/index", {
      err: err,
      packages: packages,
      title: "All Packages"
    })
  })
}

function show(req, res) {
  Profile.findById(req.params.id, function (err, vacationPackage) {
    res.render('packages/show', { 
      title: 'Package Detail', 
      vacationPackage: vacationPackage,
    })
  })
}

function deleteVacationPackage(req, res) {
  Profile.findByIdAndDelete(req.params.id, function(err, vacationPackage) {
    res.redirect('/packages')
  })
}

export {
  newPackage as new,
  create,
  index,
  show,
  deleteVacationPackage as delete
}