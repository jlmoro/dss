<template>
  <section class="menu-principal">
    <nav v-if="user" id="sidebarMenu" class="col-md-2 col-lg-2 d-md-block bg-light sidebar collapse navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
      <a class="navbar-brand w-100 bg-primary mr-0 px-3" href="#">DSS - INSELPA</a>
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <span data-feather="home"></span>
              Dashboard <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item" v-for="(data,m) in dataMenu" :key="m">
            <!-- <a class="nav-link active" :href="data.ruta"> -->
            <a class="nav-link" :href="data.ruta">
              <fa :icon="data.icono"/>
              <span>{{data.menu}}</span> <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "menuDss",
  data(){
    return{
      // dataMenu:[],
    }
  },
  computed:{
    ...mapGetters({
      user: 'auth/user',
      dataMenu: 'menu/getMenu'
    })
  },
  mounted(){
    if(this.$store.getters['auth/check']){
      this.$store.dispatch('menu/listarMenu')
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.menu-principal{
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 48px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }

  @media (max-width: 767.98px) {
    // .sidebar {
    //   top: 5rem;
    // }
  }

  // @media (min-width: )

  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }

  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
      position: -webkit-sticky;
      position: sticky;
    }
  }

  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
  }

  .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #999;
  }

  .sidebar .nav-link.active {
    color: #007bff;
  }

  .sidebar .nav-link:hover .feather,
  .sidebar .nav-link.active .feather {
    color: inherit;
  }

  .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
  }

}
</style>
