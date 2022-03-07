const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  // use snake case here

  flight_number: String,
  origin: String,
  destination: String,
  departure_date: Date,
  airplane: {
    name: String,
    rows: Number,
    cols: Number
  },
  reservations: [
    {
      row: Number,
      col: Number,
      user_id: Number

      // TODO: make this homework
      // user:{
      //   type: mongoose.Schema.Types.ObjectID,
      //   ref: `User`      
      // }
    
    }
  ]// reservation:


}); //end of Schema

// In order to be able to `require()` this model files in our seeds file and in our Express server, we need to export it here, using the older 'CommonJS' syntax (is this is the older version of 'export default...')

module.exports = mongoose.model('Flight', FlightSchema);