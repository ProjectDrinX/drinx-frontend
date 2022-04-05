<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Age from "@/components/Age.vue";
import { useStorage } from "vue3-storage";

const storage = useStorage();
function loadAgeCheck() {
  let visited = (storage.getStorageSync("major") !== undefined) ? false : true
  return visited
}
</script>

<template>

  <Age v-if="loadAgeCheck()"/>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";


</style>
