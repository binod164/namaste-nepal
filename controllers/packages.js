import { Package } from '../models/vacationPackage.js'

function newPackage(req, res) {
  res.render('packages/new',{
  title:'Add Package'
  })
}

function create(req, res) {
  console.log(req.body)
  const vacationPackage = new Package(req.body)
  vacationPackage.save(function(err) {
		if (err) return res.render('/packages/new')
    res.redirect('/packages')
  })
}

function index(req, res) {
  Package.find({}, function(err, packages){
    res.render("packages/index", {
      err: err,
      packages: packages,
      title: "All Packages"
    })
  })
}

function show(req, res) {
  Package.findById(req.params.id, function (err, vacationPackage) {
    res.render('packages/show', { 
      title: 'Package Detail', 
      vacationPackage: vacationPackage,
    })
  })
}

function deleteVacationPackage(req, res) {
  Package.findByIdAndDelete(req.params.id, function(err, vacationPackage) {
    res.redirect('/packages')
  })
}

function edit(req, res) {
  Package.findById(req.params.id, function(err, vacationPackage) {
    res.render('packages/edit', {
      vacationPackage,
      err,
      title: "Edit Package"
    })
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Package.findByIdAndUpdate(req.params.id, req.body, function(err, vacationPackage) {
    res.redirect(`/packages/${vacationPackage._id}`)
  })
}

export {
  newPackage as new,
  create,
  index,
  show,
  deleteVacationPackage as delete,
  edit,
  update
}