<script setup lang="ts">
import { useStorage } from "vue3-storage";
const storage = useStorage();

function setAdult(state: boolean) {
  storage.setStorageSync("major", state);
}
</script>
<template>

  <div class="d-flex justify-content-center align-items-center flex-column">
    
    <img 
      src="@/assets/img/logo/beer.svg" 
      alt="Logo DrinX" 
      class="img-fluid"
    />
    <h2 class="mt-3">Avez-vous 18 ans ?</h2>

    <div class="mt-2">
      <button type="button" class="btn me-3" @click="setAdult(true)">Oui</button>
      <button type="button" class="btn" @click="setAdult(false)">Non</button>
    </div>

  </div>

</template>
<style scoped>

div:first-child {
  min-height: 100vh;  
}
img {
  max-width: 50vh;
}
button {
  background-color: #FFE3E3;
  color: black;
  font-size: 1.5rem;
  padding: 5px 55px 5px 55px;
  border-radius: 15px;
}
button:first-child {
  background-color: #E3FFEA;
}

</style>s