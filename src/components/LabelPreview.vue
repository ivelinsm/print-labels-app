<template>
    <div class="print-sheet border rounded bg-white p-4 grid gap-4 auto-rows-fr" :style="gridStyle">
        <div v-for="(label, i) in labels" :key="`${label.id}-${i}`"
            class="border p-2 flex flex-col justify-between break-inside-avoid">
            <header class="text-center font-bold text-base">КОНЦЕНТРАТ {{ label.label.toUpperCase() }}</header>

            <section class="text-xs leading-snug mt-2 flex-1 whitespace-pre-wrap">
                <p><strong>Съставки:</strong> {{ label.ingredients }}</p>
                <p><strong>Съхранение:</strong> {{ label.storage }}</p>
                <p><strong>Производител:</strong> {{ label.manufacturer }}</p>
                <p><strong>Най-добър до:</strong> виж опаковката</p>
            </section>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '../store/products.js';

const store = useProductsStore();

const labels = computed(() =>
    store.flavors.flatMap(f => Array.from({ length: store.counts[f.id] }, () => f)),
);

const gridStyle = computed(() => ({
    'grid-template-columns': `repeat(${store.labelsPerRow.value}, 1fr)`,
}));
</script>

<style scoped>
@media print {
    .print-sheet {
        width: 190mm;
        min-height: 277mm;
    }
}
</style>