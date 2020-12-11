<template>
  <section>
    <h1>administrar</h1>
    <b-button variant="primary" @click="modalCrear">
      <fa icon="user-plus"/>
      Nuevo Usuario
    </b-button>


    <modal-crear ref="modalCrearRegistro"/>

  </section>
</template>
<script>
export default {
  components: {
    ModalCrear:()=>import('./components/modalCrear'),
    // ModalEliminar:()=>import('./components/eliminarProductoTipo')
  },
  data(){
    return{

    }
  },
  mounted() {

  },
  methods: {
    listar_administrar(){

    },
    modalCrear() {
      this.$refs.modalCrearRegistro.toggle()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
