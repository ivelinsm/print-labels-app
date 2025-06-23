<template>
  <div class="main" id="app">
    <PadBoard :drinks="drinks" />
    <Preview :drinks="drinks" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PadBoard from "./components/PadBoard.vue";
import Preview from "./components/Preview.vue";
import { drinksData } from "./components/Helpers/Drinks";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const drinks = ref(drinksData.sort((a,b) => a.name > b.name));
</script>

<style>
body {
  background-color: rgb(238, 238, 238);
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin: 30px;
}

@media print {
  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .padboard, h1 {
    display: none;
    visibility: collapse;
  }

  .page {
    width: 21cm;
    min-height: 29.7cm;
    padding: 0.6cm;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 255, 255);
    display: flex;
    align-content: flex-start;
    align-self: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0;
    margin-top: -0.2cm;
    border: initial;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
  }
}
@page {
  size: A4;
  margin: 0;
}
</style>
