import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema


const ticketSchema = new Schema({
  price: {
    type:Number,
    min: 0
  },
  numberOfpeople: {
    type: Number
  }

}, {
  timestamps: true
})

const packageSchema = new Schema({
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
  tickets: [ticketSchema],
  thingsToDo: [{type: Schema.Types.ObjectId, ref: ''}]
}, {
  timestamps: true
})

const Package = mongoose.model('Package', packageSchema)
const Ticket = mongoose.model('Ticket', ticketSchema)

export{
  Package
}