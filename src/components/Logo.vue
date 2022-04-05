<script setup lang="ts">

import { useStorage } from "vue3-storage";

const major = useStorage().getStorageSync("major")

</script>

<template>

  <img v-if="major" src="@/assets/img/logo/beer.svg" alt="Logo DrinX">
  <img v-else src="@/assets/img/logo/water.svg" alt="Logo DrinX">

</template>

<style scoped>
</style>