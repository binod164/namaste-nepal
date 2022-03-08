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




export {
  newActivity as new,
  create,
  // deleteActivity as delete,
  // editActivity as edit,
  // update
// }
}