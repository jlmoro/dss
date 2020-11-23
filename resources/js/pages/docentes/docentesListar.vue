<template>
  <section class="listar-docentes">
    <div class="row w-100 justify-content-center">
      <div class="col-lg-12 text-center">
        <h5>Listado de docentes</h5>
      </div>
    </div>
    <div class="row w-100 justify-content-center mt-4 mb-4 ml-2 contenedor-padre">
      <div class="col-md-4 mt-1 text-center">
        <div class="container-card-activos">
          <span class="f-18">Activos</span><br>
          <span class="f-30">30</span>
        </div>
      </div>
      <div class="col-md-4 mt-1 text-center">
        <div class="container-card-inactivos">
          <span class="f-18">Inactivos</span><br>
          <span class="f-30">20</span>
        </div>
      </div>
    </div>
    <div class="row mt-2 ml-2 mb-3 contenedor-padre">
      <div class="col-md-12">
        <div class="row">
          <div class="col">
            <el-input
            class="buscar ml-3"
            placeholder="Buscar"
            prefix-icon="el-icon-search"
            v-model="input2">
          </el-input>
          </div>
          <div class="col">
            <el-select v-model="value" clearable filterable class="opciones-filas">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="col">
            <b-button-group>
              <b-button id="pdf" class="btn-pdf">PDF</b-button>
              <b-button id="xls" class="btn-xls">XLS</b-button>
              <b-button id="csv" class="btn-csv">CSV</b-button>
            </b-button-group>
            <b-tooltip target="pdf" title="Generar PDF"></b-tooltip>
            <b-tooltip target="xls" title="Generar XLS"></b-tooltip>
            <b-tooltip target="csv" title="Generar CSV"></b-tooltip>
          </div>
          <div class="">
            <button id="btn-crear-doc" type="button" class="btn-guardar mr-3 mt-1" @click="modalRegistrarDocente">
              <fa icon="user-plus" />
            </button>
            <b-tooltip target="btn-crear-doc" title="Registrar Docente"></b-tooltip>
          </div>
        </div>
        <div class="mt-2">
          <table class="table table-stripe">
            <thead>
              <th class="letra-capital">item</th>
              <th>Encabezado</th>
              <th>Encabezado</th>
              <th>Encabezado</th>
              <th></th>
            </thead>
            <tbody>
              <tr v-for="(data,d) in 10" :key="d">
                <td>{{d + 1}}</td>
                <td>dato</td>
                <td>dato</td>
                <td>dato</td>
                <td>
                  <fa class="icono-acciones" icon="edit"/>
                  <fa class="icono-acciones" icon="trash-alt"/>
                  <fa class="icono-acciones" icon="search"/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-3">
          <b-pagination class="justify-content-center" v-model="currentPage" pills :total-rows="rows"></b-pagination>
        </div>
      </div>
    </div>

    <modal-crear ref="crearDocente" :ruta="ruta"/>
  </section>
</template>
<script>
export default {

  components: {
    ModalCrear:()=>import('./components/modalCrear'),
  },
  data(){
    return{
      ruta:'/api/docentes',
      input2:'',
      rows: 100,
      currentPage: 1,
      options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
    }
  },
  methods: {
    modalRegistrarDocente() {
      this.$refs.crearDocente.toggle()
    }
  }
}
</script>
<style lang="scss" scoped>
.listar-docentes{
  .btn-pdf{
    background-color: #750303;
    color: #f3e9e9;
  }
  .btn-csv{
    background-color: #0d6c7b;
    color: #c2e4f1;
  }
  .btn-xls{
    background-color: #056b1c;
    color: #bff1bf;
  }
  .opciones-filas{
    width: 100px;
  }
  .icono-acciones{
    background-color: #c7850c;
    padding: 1px 2px 2px 5px;
    font-size: 21px;
    border-radius: 3px;
    border: none;
    color: #f9f3e9;
  }
  .buscar{
    width: 350px;
  }
  .contenedor-padre{
    border: 1px solid #00000017;
    border-radius: 9px;
    padding: 10px 0px 10px 0px;
    box-shadow: 0.2px 0.3px 6.5px 0.5px rgb(160 157 157 / 49%);
  }
  .container-card-activos{
    border: none;
    border-radius: 3px;
    padding: 10px 0px 10px 0px;
    background-color: green;
    color: #c5e0c5;
  }
  .container-card-inactivos{
    border: none;
    border-radius: 3px;
    padding: 10px 0px 10px 0px;
    background-color: #653300;
    color: #d2a6a6;
  }
}
</style>
