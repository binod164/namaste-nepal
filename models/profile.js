import mongoose from 'mongoose'

const Schema = mongoose.Schema

const favoriteSchema = new Schema({
  place: String,
  activity: String,
  food:String,
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  favorites: [favoriteSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}