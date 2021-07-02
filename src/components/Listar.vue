<template lang="html">

  <section class="src-components-listar">
    <div v-if="mostrarClientes.length==0" class="alert alert-warning mt-1">No hay usuarios disponibles</div>            

    <table class="table" v-else>
      <tr class="bg-success text-white">
          <th>Nombre</th>
          <th>Edad</th>
          <th>E-Mail</th>
          <th></th>
      </tr>
      <tr class="bg-info text-white" v-for="(persona,index) in mostrarClientes" :key="index">
          <td>{{ persona.nombre }}</td>
          <td>{{ persona.edad }}</td>
          <td>{{ persona.email }}</td>
          <td><button class="btn btn-warning" type="button" @click="$store.dispatch('borrar',persona.id)">Borrar</button></td>
      </tr>
    </table>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-listar',
    props: [],
    mounted () {
      this.$store.dispatch('getClientes')
    },
    data () {
      return {

      }
    },
    methods: {
      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-listar {
    margin: 1em
  }
</style>
