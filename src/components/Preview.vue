<template>
  <Fragment>
    <h1>A4 - Предварителен преглед</h1>
    <div class="page">
      <div v-for="(drink, index) in printableDrinks(drinks)" class="mycard" :key="index">
        <span class="title">КОНЦЕНТРАТ {{ drink.name.toUpperCase() }}</span>
        <p class="body">{{ drink.content }}</p>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-frag';

export default {
  name: "Preview",
  components: {
    Fragment
  },
  props: {
    drinks: Array,
  },
  methods: {
    printableDrinks: function (drinks) {
      let result = [];
      drinks.forEach((drink) => {
        if (drink.counter > 0) {
          for (let i = 0; i < drink.counter; i++) {
            result.push(drink);
          }
        }
      });
      return result;
    },
  },
};
</script>

<style>
.page {
  width: 21cm;
  min-height: 29.7cm;
  padding: 0.6cm;
  margin: 0.2cm auto;
  border: 1px #D3D3D3 solid;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 255, 255);
  display: flex;
  align-content: flex-start;
  align-self: flex-start;
  flex-wrap: wrap;
  gap: 10px;
}

header {
  font-size: 42px;
  margin: 30px;
}

.mycard {
  line-height: 8px !important;
  width: 150px;
  flex-basis: 23.88%;
  align-self: flex-start;
}

.title {
  font-size: 8px;
  font-weight: bold;
}

.body {
  margin-top: 3px;
  font-size: 8px;
}
</style>