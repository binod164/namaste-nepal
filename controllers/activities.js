import { Activity } from '../models/activity.js'

function newActivity(req, res) {
  Activity.find({}, function (err, activities) {
    res.render('activities/new', {
      title: 'Add Activity',
      activities: activities,
    })
  })
}


export {
  newActivity as new,
  create
}