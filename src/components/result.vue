<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
      >
         <v-card>
          <v-card-text>
            <div>You need to pay:</div>
            <p class="display-1 text--primary">
              {{price}} {{currencies.buy}}
            </p>
            <p>current exchange rate</p>
            <div class="text--primary">
              {{rates}}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'

  export default {
    name: 'result',

    data: () => ({
     
    }),
    computed:{
     ...mapState([
      'rates',
      'price',
      'currencies'
    ])
  }
  }
</script>
