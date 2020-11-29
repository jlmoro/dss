<template>
  <div class="main-layout">
    <div class="row w-100">
      <div class="col-md-3 p-0 m-0">
        <menu-dss />
      </div>
      <div class="col-md-9 p-0 m-0">
        <navbar />
        <div class="mt-4">
          <child />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
// import MenuDss from '~/components/menuDss'

export default {
  name: 'MainLayout',

  components: {
    Navbar,
    MenuDss:()=>import('~/components/menuDss')
  }
}
</script>
