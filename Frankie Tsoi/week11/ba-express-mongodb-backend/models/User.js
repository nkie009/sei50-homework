const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  name: String,
  email: String,
  pwd: String,
  flights: [
    {
      user_id: Number,
      flight_id: Number,
      flight_number: String,
      origin: String,
      destination: String,
      departure_date: Date
    }
  ],
  reservations: [
    {
      row: Number,
      col: Number,
      user_id: Number
    }
]

}); //end of Schema

module.exports = mongoose.model('User', UserSchema)
