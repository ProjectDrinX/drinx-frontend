<script setup lang="ts">
import MainMenu from '@/components/home/MainMenu.vue'
import Tutorial from '@/components/home/Tutorial.vue'
</script>

<template>

  <div class="container">

    <div class="d-flex justify-content-center mt-4">
      <Logo class="logo" />
    </div>

    <div class="box mt-4 round row">

      <div class="col-xl-8 d-flex justify-content-center"> <!-- align-items-center flex-column -->

      </div>
        
      <div class="col-xl-4 round">

      </div>

    </div>

  </div>

</template>

<style scoped>
.logo {
  max-width: 255px;
}
.round {
  border-radius: 50px;
}
.box {
  background-color: white;
  min-height: 80vh;
}
.box > div:first-child {

}

.box > div:last-child {
  background-color: #E68F28;
}

</style>