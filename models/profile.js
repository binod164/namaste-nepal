import mongoose from 'mongoose'

const favoriteSchema = new mongoose.Schema({
  place: String,
  activity: String,
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
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