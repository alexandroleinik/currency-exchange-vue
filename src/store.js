import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      rates:null,
      loading:false,
      price:null
    },
    mutations: {
      startLoading (state) {
        state.loading=true
      },
      stopLoading(state){
          state.loading=false
      },
      setRates(state,rates){
          state.rates=rates
      },
      setPrice(state,price){
        state.price=price
      },
      setCurrencies(state,payload){
        state.currencies=payload
      }
    },
    actions: {
        startLoading (context) {
          context.commit('startLoading')
        },
        stopLoading (context) {
          context.commit('stopLoading')
        },
        setRates(context,rates){
            context.commit('setRates',rates)
        },
        async getRates(context,payload){
            context.commit('startLoading')
            context.commit('setCurrencies',payload)
            const res = await fetch(`https://api.exchangeratesapi.io/latest?base=${payload.sell}`);
            const data = await res.json()
            const rates = await data.rates[payload.buy]
            context.commit('setRates',rates.toFixed(2))
            context.commit('stopLoading')
            
        },
        async exchange(context,payload){
          await context.dispatch('getRates',payload.currencies)
          const price =await payload.count*this.state.rates 
          context.commit('setPrice',price.toFixed(2))
        }
      },
    getters: {
        getLoading: state => {
          return state.loading
        }
      }
  })


  export default store