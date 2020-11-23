<template>
  <modal-form ref="modalCrear" size="md">

     <div slot="header" class="row">
       <div class="col-12">
         <p class="letra-capital f-20">registrar docente</p>
       </div>
     </div>
     <div slot="body" class="row w-100">

       <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Shipping Address"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="3"
        label="Street:"
        label-align-sm="right"
        label-for="nested-street"
      >
        <b-form-input id="nested-street"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="City:"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="State:"
        label-align-sm="right"
        label-for="nested-state"
      >
        <b-form-input id="nested-state"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Country:"
        label-align-sm="right"
        label-for="nested-country"
      >
        <b-form-input id="nested-country"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Ship via:"
        label-align-sm="right" class="mb-0"
      >
        <b-form-radio-group
          class="pt-2"
          :options="['Air', 'Courier', 'Mail']"
        ></b-form-radio-group>
      </b-form-group>
    </b-form-group>
  </b-card>

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
  name: "ModalCrear",
  props: ['ruta'],
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
