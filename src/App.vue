<template>
  <main class="home flex flex-col lg:flex-row p-4 gap-4">
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

<style>
.home {
  min-height: 100vh;
  background: #e0e0e0;
  background: linear-gradient(231deg, rgba(224, 224, 224, 1) 0%, rgba(204, 204, 204, 0.86) 50%, rgba(237, 237, 237, 0.91) 100%);
}
</style>