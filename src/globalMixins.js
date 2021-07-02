import Vue from 'vue'

var miMixin = {
    mounted() {

    },
    computed: {
        mostrarClientes() {
            return this.$store.state.clientes
        }
    }
}
Vue.mixin(miMixin)
