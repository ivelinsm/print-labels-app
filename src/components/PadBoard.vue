<template>
  <div class="padboard d-flex justify-content-center container row text-center">
    <h1 class="text-center">Видове (Общ брой: {{ totalCounter }})</h1>
    <div v-for="(drink, index) in drinks" :key="index" class="card col-md-2">
      <div class="card-body">
        <h5 class="card-title" :style="drink.counter ? 'background-color: palegreen; border-radius: 3px' : ''">{{drink.name}}</h5>
        <div class="d-flex button-group justify-content-center">
        <button @click="decreaseCounter(index)" type="button" class="btn btn-primary btn-sm fw-bold col-3">-</button>
        <input @input="inputChange" class="bg-white" type="number" v-model.number='drink.counter' min=0 max=4/>
        <button @click="increaseCounter(index)" type="button" class="btn btn-primary btn-sm fw-bold col-3">+</button>
        </div>
        <button @click="resetCounter(index)" type="button" class="btn btn-secondary">Нулирай</button>
      </div>
    </div>
    <div class="info">
      <h5>За да принтираш:</h5>
      <h3>Ctrl + P</h3>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'PadBoard',
  props: {
    drinks: Array
  },
  computed: {
    totalCounter() {
      let totalNum = 0;
      this.drinks.forEach(drink => totalNum+=drink.counter);
      return totalNum;
    }
  },
  methods: {
    decreaseCounter(index) {
      if(this.drinks[index].counter<=0) return;

      this.drinks[index].counter -= 1;
    },

    increaseCounter(index) {
      this.drinks[index].counter += 1;
    },

    resetCounter(index) {
      this.drinks[index].counter = 0;
    },

    inputChange(event) {
      // console.log('Input changed :' + event)
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 30px;
}

.card {
  margin: 6px 10px;
}

.card:hover .btn-secondary {
  /* background-color: rgba(255, 255, 255, 0.808); */
  visibility: visible !important;

}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-title {
  font-size: 16px;
  padding: 2px 0px;
}

.info {
  padding: 12px;
  border-radius: 12px;
  background-color: rgb(230, 230, 230);
}

input{
  width: 1.8rem;
  margin: 0px 8px;
  text-align: center;
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.button {
  width: 50%;
}

.btn-secondary {
  align-self: center;
  width: 40%;
  padding: 0;
  font-size: 10px;
  height: 1rem;
  visibility: hidden;
}
</style>
