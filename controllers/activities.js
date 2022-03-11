import { Activity } from '../models/activity.js'


function newActivity(req, res) {
  res.render('activities/new',{
    title:'Add Recommendations'
  })
}

function index(req, res) {
  Activity.find({})
  .then(activities => {
    res.render('activities/index', {
      activities,
      title: "Activities To Do In Nepal"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/activities")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  console.log(req.user);
  Activity.create(req.body)
  .then(activity => {
    res.redirect('/activities')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/activities')
  })
}

function show(req, res) {
  Activity.findById(req.params.id)
  .populate("owner")
  .then(activity => {
    res.render('activities/show', {
      activity,
      title: "Activity show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/activities')
  })
}

function edit(req, res) {
  Activity.findById(req.params.id)
  .then(activity => {
    res.render('activities/edit', {
      activity,
      title: "Edit Recommendations"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/activities')
  })
}

function update(req, res) {
  Activity.findById(req.params.id)
  .then(activity => {
    if (activity.owner.equals(req.user.profile._id)) {
      activity.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect('/activities')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/activities`)
  })
}

function deleteActivity(req, res) {
  Activity.findById(req.params.id)
  .then(activity => {
    if (activity.owner.equals(req.user.profile._id)) {
      activity.delete()
      .then(() => {
        res.redirect('/activities')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/activities')
  })
}

export {
  newActivity as new,
  index,
  show,
  create,
  deleteActivity as delete,
  edit,
  update
}
