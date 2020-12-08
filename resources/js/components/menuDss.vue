<template>
  <section class="menu-principal" v-if="user">
    <div class="hidden">

      <vs-sidebar v-model="active" open>
        <template #logo>
          <div class="mt-2 ml-4">
            <img src="/img/logo_2.png" width="100" height="100" alt="">
          </div>
        </template>
        <vs-sidebar-group v-for="(data,m) in dataMenu" :key="m">
          <template #header>

            <vs-sidebar-item v-show="!data.items.length" :id="data.menu" :to="data.ruta">
              <template #icon>
                <fa :icon='data.icono'/>
              </template>
              <span class="letra-capital">{{data.menu}}</span>
            </vs-sidebar-item>

            <vs-sidebar-item arrow v-show="data.items.length">
              <template #icon>
                <fa :icon='data.icono'/>
              </template>
              <span class="letra-capital">{{data.menu}}</span>
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item v-for="(data2,i) in data.items" :key="i" :id="data2.nombre" :to="data2.ruta">
            <template #icon>
              <fa :icon='data2.icono'/>
            </template>
            <span class="letra-capital">{{data2.menu}}</span>
          </vs-sidebar-item>
        </vs-sidebar-group>
      </vs-sidebar>

    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "menuDss",
  data(){
    return{
      // dataMenu:[],
      active: 'home',
    }
  },
  computed:{
    ...mapGetters({
      user: 'auth/user',
      dataMenu: 'menu/getMenu'
    })
  },
  created() {
    if(this.$store.getters['auth/check']){
      this.$store.dispatch('menu/listarMenu')
    }
  },
  // mounted(){
  // },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.menu-principal{
  .vs-sidebar-content .vs-sidebar__logo img{
    max-width: 120px;
    max-height: 101px;
  }
  .vs-sidebar-content{
    // max-width: 208px !important;
    border-radius: 0px 8px 8px 0px !important;
    z-index: 1000;
  }
}
</style>
