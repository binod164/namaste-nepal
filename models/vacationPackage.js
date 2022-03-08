import mongoose from 'mongoose'

const Schema = mongoose.Schema


const ticketSchema = new Schema({
  bookedBy: {
    type:String,
  },
  price: {
    type:Number,
    min: 0
  },
  numOfPeople: {
    type: Number
  }

}, {
  timestamps: true
})

const packageSchema = new Schema({
  destination: {
    type:String,
  },
  duration: {
    type:Number, 
  },
  tourGuide: {
    type:String,
  },
  tripDate: {
    type:Date,
  },
  tickets: [ticketSchema],
  owner: {
    type: Schema.Types.ObjectId, 
    ref: 'Profile'
  },
  // activity: [{type: Schema.Types.ObjectId, ref: 'Activity'}]
}, {
  timestamps: true
})

const Package = mongoose.model('Package', packageSchema)
// const Ticket = mongoose.model('Ticket', ticketSchema)

export{
  Package
}