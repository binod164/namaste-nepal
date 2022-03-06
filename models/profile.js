import mongoose from 'mongoose'

const packageSchema = new mongoose.Schema({
  destination: {
    type:String,
    enum: ["Kathmandu","Pokhara","Chitwan"]
  },
  duration: {
    type:Number, 
  },
  tourGuide: {
    type:String,
    enum: ["Jhilke Dai","Rajesh Hamal","Dhamala"]
  },
  departs: {
    type:Date,
    default: function() {
      return new Date().setFullYear(new Date().getFullYear() + 1)
    },
  },
}, {
  timestamps: true
})


const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  packages: [packageSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
