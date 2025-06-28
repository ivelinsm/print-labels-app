<template>
    <div class="flex flex-wrap items-center gap-4 no-print">
        <!-- Labels per row  ------------------------------------------------------>
        <label class="flex items-center gap-2 ">
            <span>Етикети на ред:</span>
            <input type="number" min="1" max="4" v-model="localPerRow" class="w-16 border rounded text-center" />
        </label>

        <!-- Print ---------------------------------------------------------------->
        <!-- <button @click="window.print()"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Принтиране</button> -->
        <div class="ml-auto">Принтирай:
            <kbd class="border px-2 py-1 rounded text-xl bg-gray-100 text-gray-800">Ctrl + P</kbd>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useProductsStore } from '../store/products.js';

const store = useProductsStore();
const localPerRow = ref(store.labelsPerRow.value);

// Watch for changes in local value and update store
watch(localPerRow, v => store.setLabelsPerRow(v));

// Watch for category changes and automatically set labels per row
watch(() => store.activeCategory.value, (newCategory) => {
    if (newCategory === store.CATEGORIES.SLUSHY) {
        localPerRow.value = 2;
    } else if (newCategory === store.CATEGORIES.CONCENTRATE) {
        localPerRow.value = 4;
    }
}, { immediate: true }); // Run immediately to set initial value

</script>
