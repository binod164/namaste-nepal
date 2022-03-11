import mongoose from 'mongoose'

const Schema = mongoose.Schema

const activitySchema = new Schema({
  name: {
    type:String
  },
  recommendedPlaces: {
    type:String
  },
  recommendedActivities: {
    type:String
  },
  owner: {
    type: Schema.Types.ObjectId, 
    ref: 'Profile'
  },
},{
    timestamps: true
})

const Activity = mongoose.model('Activity', activitySchema)

export{
  Activity
}