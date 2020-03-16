<template>
  <v-app class="app">
    <v-content >
      <h1 class="text-center">Currency exchange</h1>
      <setCurrency/>
      <result v-if="price"/>
    </v-content>
       <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>


import setCurrency from './components/setCurrency';
import result from './components/result';
import { mapState } from 'vuex'
export default {
  name: 'App',

  components: {
    setCurrency,
    result
  },

  data: () => ({
    //
  }),
  computed:{
     ...mapState([
      'loading',
      'price'
    ])
  }
};
</script>

<style lang="scss">
.app{
  padding-top: 5% ;
}
</style>
