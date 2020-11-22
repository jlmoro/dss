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
    <div class="row mt-2 ml-2 contenedor-padre">
      <div class="col-md-12">
        <el-input
          class="buscar ml-3"
          placeholder="Buscar"
          prefix-icon="el-icon-search"
          v-model="input2">
        </el-input>
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
              <tr v-for="(data,d) in 4" :key="d">
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
  </section>
</template>
<script>
export default {
  name: "",
  data(){
    return{
      input2:'',
      rows: 100,
      currentPage: 1
    }
  }
}
</script>
<style lang="scss" scoped>
.listar-docentes{
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
