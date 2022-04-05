<template>
  <div class="box-content">

    <h1 class="mb-4 mt-5">commencer à jouer</h1>

    <ul 
      class="nav nav-pills mb-3 justify-content-center" 
      id="pills-tab" 
      role="tablist">

      <li class="nav-item" role="presentation">
        <button 
          class="nav-link active" 
          id="pills-home-tab" 
          data-bs-toggle="pill" 
          data-bs-target="#pills-home" 
          type="button" role="tab" 
          aria-controls="pills-home" 
          aria-selected="true">
          rejoindre
          </button>
      </li>
      <li class="nav-item" role="presentation">
        <button 
        class="nav-link" 
        id="pills-create-tab" 
        data-bs-toggle="pill" 
        data-bs-target="#pills-create" 
        type="button" 
        role="tab" 
        aria-controls="pills-create" 
        aria-selected="false">
        créer
        </button>
      </li>
    </ul>

    <div class="tab-content" id="pills-tabContent">
      <div 
      class="tab-pane fade show active" 
      id="pills-home" 
      role="tabpanel" 
      aria-labelledby="pills-home-tab">
      
        
      <input 
        type="text" 
        id="nickname" 
        name="nickname"
        required
        minlength="4" 
        maxlength="20"
        placeholder="Ton nom">

      <input 
        type="text" 
        id="gameid" 
        name="gameid"
        required
        minlength="4" 
        maxlength="15"
        placeholder="Code de la partie">

      </div>

      <div 
      class="tab-pane fade" 
      id="pills-create" 
      role="tabpanel" 
      aria-labelledby="pills-create-tab">
      ...2
      </div>

    </div>

  </div>
</template>

<style scoped>
.box-content {

}

h1 {
  font-family: 'Soleil';
  font-weight: bold;
  text-transform: uppercase;
  color: #313131;
  text-align: center;
  font-size: 40px;
}

input {
  min-width: 100%;
  border-radius: 25px;
  padding: 5px 0px 5px 30px;
  border: solid 1px #707070;
  margin-top: 15px;
}

::placeholder {
  color: #B7B7B7;
  font-family: 'Soleil';
  font-size: 1.2em;
}
/* Tabs */

ul {
  margin-left: 30px;
}

li.nav-item > .active {
  background-color: #313131;
  color: #D9D9D9;
  z-index: 5;
}
li.nav-item > button {
  background-color: #F1F1F1;
  color: #B7B7B7;
  font-family: 'Soleil';
  text-transform: uppercase;
  border-radius: 25px;
  font-weight: 200;

  width: 230px;
  margin-left: -30px;

  z-index: 1;

}
</style>
