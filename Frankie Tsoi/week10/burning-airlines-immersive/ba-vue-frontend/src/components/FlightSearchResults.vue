<template>
  <div>
    <h2>Search Results from {{origin}} to {{destination}}</h2>

    <div v-if='loading' class="load">
      <p>Loading flight results......</p>
    </div>

    <div v-else>
      <div v-for="f in flights" class="results">
        <p>plane name: {{f.airplane.name}}</p>
        <p>flight number: {{ f.flight_number }}</p>
         <p>date & time: {{ f.departure_date }}</p>
         <p>origin: {{ f.origin }}</p>
         <p>destination: {{ f.destination }}</p>
      </div>

    </div>

    </div>
    
</template>

<script>
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/'

export default {
  name: 'FlightSearchResults',
  props: ['origin', 'destination'],
  data(){
    return{
      flight:[],
      loading: true,
      error: null

    }; //return
  },//data
  
    async mounted(){
      console.log('component mounted', this.origin, this.destination);

      try{
        const url = `${API_BASE_URL}/flights/search/${this.origin}/${this.destination}`
        const res = await axios.get(url);
        this.flights = res.data;
        this.loading = false;
        console.log('response', res.data)
      } catch(err){
        console.log('Error loading flight search results', err);
        this.error = error;
      }


    },//mounted

    methods: {

    }//method
 
}//export defaults
</script>

<style>
.results{
  border: 2px solid red;
  display: inline-block;
  text-align: left;
  margin: 20px;
  padding: 10px;
}

</style>