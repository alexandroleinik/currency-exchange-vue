<template>
   <v-container>
    <h2 align="center">Select currency </h2>
    <v-form
      @submit.prevent="submit"
      ref="form"
      v-model="valid">
     
        <v-row justify="center">
          <v-col
            cols="12"
            md="3"
          >
              <v-select
              v-model="buyCurrency"
              :rules="selectRules"
              :items="currencys"
              label="Want sell"
              required
          ></v-select>
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
              <v-select
              :rules="selectRules"
            :items="currencys"
            v-model="sellCurrency"
            label="Want buy"
            required
          ></v-select>
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="count"
              :rules="countRules"
              label="Currency count"
              required
            ></v-text-field>
          </v-col>

          
        </v-row>
        <v-row justify="center">
          <v-col
          cols="12"
            md="3">
            <v-btn
              type="submit"
              color="success"
              class="mr-4"
              block
          >
          Send
        </v-btn>
          </v-col>
        </v-row>
      
  </v-form>

</v-container>

</template>

<script>
//import { mapActions } from 'vuex'
export default {
  name: 'setCurrency',
  props: {
  },
  data:()=>{
    return{ 
      valid: true,
      count: '',
      countRules: [
        v => !!v || 'Count is required',
        v => (v && parseInt(v) > 0) || 'Count should be more than 0',
      ],
      sellCurrency: null,
      buyCurrency: null,

      selectRules: [
        v => !!v || 'Currency is required',
        v => (v && !!v) || 'Count should be more than 0',
      ],
      rates:null,
      currencys:[
        {
          text:'USD',
          value:'USD'
        },
        {
          text:'EUR',
          value:'EUR'
        },
        {
          text:'PLN',
          value:'PLN'
        },
        {
          text:'CZK',
          value:'CZK'
        },
      ]
    }
  },
  methods: {
      validate () {
        this.$refs.form.validate()
      },
      submit : function(){
        this.validate()
        if(this.valid===true){
          const payload = {currencies:{sell:this.sellCurrency,buy:this.buyCurrency},count:this.count}
           this.$store.dispatch('exchange',payload)
        }
      }
  }
}
</script>

<style lang="scss">

</style>
