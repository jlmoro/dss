<template>
  <modal-form ref="modalCrear" size="sm">

     <div slot="header" class="row">
       <div class="col-12">
         <p class="letra-capital">registrar producto</p>
       </div>
     </div>
     <div slot="body" class="row w-100">

     </div>
     <div slot="footer" class="row">
       <div class="col-md-6">
         <button type="button" class="btn-crear" name="button" > Crear </button>
       </div>
       <div class="col-md-6">
         <button type="button" class="btn-cancelar" data-dismiss="modal"> Cerrar </button>
       </div>
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
