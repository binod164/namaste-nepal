import { Activity } from '../models/activity.js'

function newActivity(req, res) {
  Activity.find({}, function (err, activities) {
    res.render('activities/new', {
      title: 'Activities To Do In Nepal',
      activities : activities,
    })
  })
}

function create(req, res) {
  Activity.create(req.body, function (err, activity) {
    res.redirect('/activities/new')
  })
}

function deleteActivity(req, res) {
  Activity.findByIdAndDelete(req.params.id, function(err, activity) {
    res.redirect('/activities/new')
  })
}

function editActivity(req, res) {
  Activity.findById(req.params.id, function(err, activity) {
    res.render('activities/edit', {
      activity,
      err,
      title: "Edit Activity"
    })
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Activity.findByIdAndUpdate(req.params.id, req.body, function(err, activity) {
    res.redirect(`/activities/new`)
  })
}



export {
  newActivity as new,
  create,
  deleteActivity as delete,
  editActivity as edit,
  update
}
