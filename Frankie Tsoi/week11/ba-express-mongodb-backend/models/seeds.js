
const mongoose = require('mongoose');

const Flight = require('./Flight');

mongoose.connect('mongodb://localhost/ba');

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Connection error', err);
});

db.once('open', async () => {

  //ActiveRecord Flight.all
  // Flight.find()
  // .then(data => {
  //   console.log('flights', data);
  // })
  // .catch(err =>{
  //   console.log('Error querying flights:', err);
  // });
 await Flight.deleteMany();
  try{
    const results = await Flight.create([
      
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
  
    ]);
    // console.log('Create flights:', results);

  } catch(err){
    console.log('Error creating flights:', err);
  } 

  try{
    const flights = await Flight.find();
    console.log('flights:', flights);
  } catch (err){
    console.log('Error finding flights:', err);
    process.exit(1);
  }

  process.exit(0);// all good, quit program

});// once open