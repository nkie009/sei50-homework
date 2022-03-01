<template>
<div>
  <h2>Flight________</h2>
</div>
  
</template>

<script>
export default {
  name: 'FlightDetails',
  props: ['id'],
  data (){
    return{
      flight: {},
      loading: true
    }
  },
  async mounted(){
    console.log('FlightDetails mounted, ID =', this.id);
  }
}
</script>

<style>

</style>