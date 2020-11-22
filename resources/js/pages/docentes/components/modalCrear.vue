<template>
  <modal-form ref="modalCrear" size="sm">

     <div slot="header" class="row">
       <div class="col-12">
         <p class="letra-capital">registrar docente</p>
       </div>
     </div>
     <div slot="body" class="row w-100">

     </div>
     <div slot="footer" class="">
       <button type="button" class="btn-cerrar" data-dismiss="modal">
         <fa icon="times" />
         Cerrar
       </button>

       <button type="button" class="btn-guardar" name="button" >
         <fa icon="check" />
         Crear
       </button>

     </div>


  </modal-form>
</template>
<script>
export default {
  name: "",
  data(){
    return{

    }
  },
  methods: {
    toggle() {
      this.$refs.modalCrear.toggle()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
