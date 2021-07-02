<template lang="html">

<section class="src-components-agregar">
<vue-form :state="formState" @submit.prevent="enviar()">
        <h2 style="color:red">Agregar Cliente</h2>
        <hr/>
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            class="form-control"
            autocomplete="off"
            v-model="formData.nombre"
            required
            :minlength="nombreLengthMin"
            :maxlength="nombreLengthMax"
          >
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>           
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{ nombreLengthMin }} caracteres
            </div>            
            <div v-if="formData.nombre.length == nombreLengthMax" class="alert alert-warning mt-1">
              Este campo debe tener como máximo {{ nombreLengthMax }} caracteres
            </div>            
          </field-messages>

        </validate>
        <br>
        <!-- campo Edad -->
        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number" 
            id="edad" 
            name="edad" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.edad"
            required
            :min="edadMin"
            :max="edadMax"
          >
          <!-- mensajes de validación -->
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
            <div slot="min" class="alert alert-danger mt-1">La edad mínima es {{edadMin}}</div>            
            <div slot="max" class="alert alert-danger mt-1">La edad máxima permitida es {{edadMax}}</div>            
          </field-messages>

        </validate>
        <br>
        <!-- campo email -->
        <validate tag="div">
          <label for="email">email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model="formData.email"
            required
            email
          >
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>

        </validate>
        <br>
        <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Enviar</button>

      </vue-form>
    </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-agregar',
    props: [],
    mounted () {

    },
    data () {
      return {
        formData : this.getInicialData(),
        formState : {},
        nombreLengthMin : 3,
        nombreLengthMax : 15,
        edadMin : 18,
        edadMax : 120,
      }
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',
          edad: '',
          email: '',
        }
      },
      async enviar() {
        this.$store.dispatch('agregar',this.formData)
        this.formData = this.getInicialData()
        this.formState._reset()
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-agregar {
    margin: 2em;
  }
</style>
