<template>
  <div class="main-layout">
    <div class="row w-100">
      <div class="col-md-2">
        <menu-dss />
      </div>
      <div class="col-md-10">
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
