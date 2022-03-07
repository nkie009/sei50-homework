let db;

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
  'mongodb://127.0.0.1:27017/', // URL to reach the server
  {}, //option object
  (err, client) => {

    //Check for errors
    if(err){
      console.log('Error connection to MongoDB server', err);
      process.exit(1);
    } //if error check

    db = client.db('ba');

    // First do equivalent of Flight.destroy.all
    db.collection('flights').deleteMany({},(err, results) => {

      if(err){
        console.log('Error deleting flights:', err);
        return;
      }

    }); // deleteMany

    insertFlights();

  }// err, client
); //MongoClient.connect()


const insertFlights = () => {
  console.log('insertFlights()');
  db.collection('flights').insertMany([
    {
      flights_number: 'BA123',
      origin: 'SYD',
      destination: 'MEL',
      departure_date: new Date('2022-03-20T04:20:00Z'),
      airplane: {
        name: '737 Max',
        rows: 20,
        cols: 6
      }, //nested data of an ID (association)
      reservation: [
        {row: 1, col: 1, user_id: 10},
        {row: 2, col: 2, user_id: 10},
        {row: 3, col: 3, user_id: 11}
      ], //reservation
    },// end of flight no.1

    {
      flights_number: 'BA456',
      origin: 'SYD',
      destination: 'MEL',
      departure_date: new Date('2022-03-21T05:20:00Z'),
      airplane: {
        name: '767',
        rows: 16,
        cols: 4
      }, //nested data of an ID (association)
      reservation: [
        {row: 1, col: 1, user_id: 10},
        {row: 1, col: 2, user_id: 10},
        {row: 1, col: 3, user_id: 11}
      ], //reservation
    },// end of flight no.2

  ],// end of 1st arg to insertMany,

  (err, result) => {

    if(err) {
      console.log('Error adding flights', err);
      return;
    }

    console.log(`Success! Added ${result.insertedCount} flights`);
  
    // process.exit(0); // exit the Node.js program

    printFlights();

  }// call back function

  );// insertMany()

};//insertFlights

const printFlights = () => {
  //Like ActiveRecord Flight.all
  db.collection('flights').find().toArray((err, flights) => {
    
    if(err){
      console.log('Error finding flight:', err);
      return;
    }

    console.log('Flight:', flights);
    
    process.exit(0)// quit the program, no errors

  });//.find().toArray()

}; // print flights
