<template>

  <nav v-if="user" class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow justify-content-end" style="height: 40px;">
    <!-- <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a> -->
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <div class="notificacion">
          <fa icon="bell" class="mr-3 icon-campana"/>
          <span class="cantidad-notificacion">3</span>
        </div>
        <img id="popover-button-variant" :src="user.photo_url" class="profile-photo" alt="">
        <b-popover
          target="popover-button-variant"
          variant="primary" triggers="click"
          placement="bottom">
          <template #title>{{user.name}}</template>
          <div class="">
            <fa icon="user" class="mr-1" style="font-size:15px;"/>
            <span style="font-size:16px;">Perfil</span>
          </div>
          <div class="mt-2">
            <fa icon="cog" class="mr-1" style="font-size:15px;"/>
            <span style="font-size:16px;">Configuración</span>
          </div>
          <hr>
          <div class="" style="cursor:pointer;">
            <fa icon="sign-out-alt" style="font-size:15px;"/>
            <span style="font-size:16px;" @click.prevent="logout">Salir</span>
          </div>
        </b-popover>
        <!-- <a class="nav-link" href="#">Sign out</a> -->
      </li>
    </ul>
  </nav>

</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      // cerrar sesión
      await this.$store.dispatch('auth/logout')

      // redireccionar al login
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-photo {
  width: 40px;
  height: 40px;
  margin: -.375rem 0;
  border-radius: 50%;
  position: relative;
  bottom: 12px;
}

.notificacion{
  position: relative;
  right: 62px;
  top: 15px;
  .icon-campana{
    color: white;
    font-size: 20px;
    // position: absolute;
  }
  .cantidad-notificacion{
    position: absolute;
    left: 10px;
    bottom: 14px;
    font-size: 11px;
    border-radius: 7px;
    width: 18px;
    height: 16px;
    text-align: center;
    background-color: #c11f1f;
    color: white;
  }
}
</style>
