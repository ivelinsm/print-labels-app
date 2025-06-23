<script setup>
import { ref, watch } from 'vue';
import { useProductsStore } from '../store/products.js';

const store = useProductsStore();
const localPerRow = ref(store.labelsPerRow.value);
watch(localPerRow, v => store.setLabelsPerRow(v));
</script>

<template>
    <div class="flex items-center gap-4 no-print">
        <label class="flex items-center gap-2">
            <span>Етикети в ред:</span>
            <input type="number" min="1" max="4" v-model="localPerRow" class="w-16 border rounded text-center" />
        </label>

        <button class="ml-auto px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            @click="window.print()">Печат</button>
        <kbd class="border px-2 py-1 rounded text-xs bg-gray-100 text-gray-700">Ctrl + P</kbd>
    </div>
</template>