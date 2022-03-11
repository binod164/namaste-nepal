import { Package } from '../models/vacationPackage.js'

function newPackage(req, res) {
  res.render('packages/new',{
    title:'Add Package'
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Package.create(req.body)
  .then(vacationPackage => {
    res.redirect('/packages')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/packages')
  })
}

function index(req, res) {
  Package.find({})
  .then(packages => {
    res.render('packages/index', {
      packages,
      title: "Vacation Packages"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/packages")
  })
}

function show(req, res) {
  Package.findById(req.params.id)
  .populate("owner")
  .then(vacationPackage => {
    res.render('packages/show', {
      vacationPackage,
      title: "Package Details"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/packages')
  })
}

function deleteVacationPackage(req, res) {
  Package.findById(req.params.id)
  .then(vacationPackage => {
    if (vacationPackage.owner.equals(req.user.profile._id)) {
      vacationPackage.delete()
      .then(() => {
        res.redirect('/packages')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/packages')
  })
}

function edit(req, res) {
  Package.findById(req.params.id)
  .then(vacationPackage => {
    res.render('packages/edit', {
      vacationPackage,
      title: "Edit Package"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/packages')
  })
}

function update(req, res) {
  Package.findById(req.params.id)
  .then(vacationPackage => {
    if (vacationPackage.owner.equals(req.user.profile._id)) {
      vacationPackage.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect('/packages')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/packages`)
  })
}

function createTicket(req, res) {
  Package.findById(req.params.id, function(err, vacationPackage) {
    vacationPackage.tickets.push(req.body)
    vacationPackage.save(function(err) {
      res.redirect(`/packages/${vacationPackage._id}`)
  })
})
}

export {
  newPackage as new,
  create,
  index,
  show,
  deleteVacationPackage as delete,
  edit,
  update,
  createTicket,
}