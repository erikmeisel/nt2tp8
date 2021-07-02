import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const URL_CLIENTES = "https://609dbea233eed80017957098.mockapi.io/tp6clientes"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {    
        clientes:[]        
    },
    actions : {
        async getClientes({commit}) {
            let {data:clientes} = await axios(URL_CLIENTES)
            commit('getClientes',clientes)
        },
        async borrar({commit},id) {
            let respuesta = await axios.delete(URL_CLIENTES+"/"+id)
            console.log(respuesta)
            commit('borrar',id)
        },
        async agregar({commit},cliente) {
            let respuesta = await axios.post(URL_CLIENTES,cliente,{'content-type':'application/json'})
            console.log(respuesta)     
            commit('agregar',cliente)       
        }
    },
    getters: {
    },    
    mutations : {
        getClientes(state,clientes){
            state.clientes = clientes
        },
        borrar(state,id) {
            let i = state.clientes.indexOf(it => it.id == id)
            state.clientes.splice(i,1)
        },
        agregar(state,cliente) {
            state.clientes.push(cliente)
        }
    }
})
