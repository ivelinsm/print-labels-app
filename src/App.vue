<template>
  <main class="flex flex-col lg:flex-row p-4 gap-4">
    <section class="w-full lg:w-1/2 space-y-4 no-print">
      <PrintControls />
      <ProductGrid />
    </section>

    <section class="w-full lg:w-1/2">
      <LabelPreview />
    </section>
  </main>
</template>

<script setup>
import ProductGrid from './components/ProductGrid.vue';
import PrintControls from './components/PrintControls.vue';
import LabelPreview from './components/LabelPreview.vue';
</script>