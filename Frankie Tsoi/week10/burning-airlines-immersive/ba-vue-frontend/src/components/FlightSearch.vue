<template>
  <div>
    <h2>Search Flights</h2>
    <label>Origin</label>
    <select v-model="origin">
      <option value="">Please select:</option>
      <option value="SYD">SYD</option>
      <option value="MEL">MEL</option>
      <option value="SIN">SIN</option>
      <option value="SFO">SFO</option>
    </select>

    &nbsp; &nbsp;

    <label>Destination</label>
     <select v-model="destination">
      <option value="">Please select:</option>
      <option value="SYD">SYD</option>
      <option value="MEL">MEL</option>
      <option value="SIN">SIN</option>
      <option value="SFO">SFO</option>
    </select>

    &nbsp; &nbsp;
    <button @click="submitSearch">Search</button>
    
  </div>
  
</template>

<script>
export default {
  name: 'FlightSearch',
  data(){
    return{
      //this is like the state object in REACT
      origin: 'SYD',
      destination: 'MEL'
    };

  }, //end data

  methods: {
    submitSearch(){
      console.log('Submitted');
      // console.log('$router:', this.$router);
      this.$router.push({
        name: 'SearchResults',
        params :{
          origin: this.origin,
          destination: this.destination
        }
      }); //push
    }// submitSearch
  },//method
}//export
</script>

<style>

</style>