import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const thingsToDoSchema = new Schema({
  name: {
    type:String
  },
},{
    timestamps: true
})

const ThingsToDo = mongoose.model('ThingsToDo', thingsToDoSchema)

export{
  ThingsToDo
}