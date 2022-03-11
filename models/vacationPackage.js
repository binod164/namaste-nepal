import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  bookedBy: {
    type:String,
  },
  price: {
    type:Number,
    min: 0,
  },
  numOfPeople: {
    type: Number,
    default: 1
  }

}, {
  timestamps: true
})

const packageSchema = new Schema({
  destination: {
    type:String,
    enum: ["Kathmandu","Chitwan","Pokhara"]
  },
  duration: {
    type:Number, 
  },
  tourGuide: {
    type:String,
    enum: ["Jhilke","Rajesh Hamal","Kale Dai","Dhamala"]
  },
  tripDate: {
    type:Date,
  },
  tickets: [ticketSchema],
  owner: {
    type: Schema.Types.ObjectId, 
    ref: 'Profile'
  },
}, {
  timestamps: true
})

const Package = mongoose.model('Package', packageSchema)

export{
  Package
}