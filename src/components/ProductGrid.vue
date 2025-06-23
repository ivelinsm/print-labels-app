<template>
    <section>
        <header class="mb-4 flex items-center justify-between">
            <h2 class="text-xl font-semibold">Продукти</h2>
            <span class="text-lg font-medium">Общо: {{ total }}</span>
        </header>

        <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li v-for="flavor in store.flavors" :key="flavor.id"
                class="rounded-lg border p-3 flex flex-col gap-2 bg-white shadow-sm">
                <h3 class="font-semibold text-center">{{ flavor.label }}</h3>

                <div class="flex items-center justify-center gap-2">
                    <button class="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-30"
                        @click="store.decrement(flavor.id)" :disabled="store.counts[flavor.id] === 0">−</button>

                    <input type="number" min="0" class="w-16 text-center border rounded"
                        :value="store.counts[flavor.id]"
                        @change="event => store.setCount(flavor.id, parseInt(event.target.value, 10) || 0)" />

                    <button class="px-2 py-1 rounded bg-green-500 text-white hover:bg-green-600"
                        @click="store.increment(flavor.id)">+</button>
                </div>

                <button v-if="store.counts[flavor.id] > 0" class="mt-auto text-xs text-gray-500 hover:underline"
                    @click="store.reset(flavor.id)">Нулирай</button>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '../store/products.js';

const store = useProductsStore();
const total = computed(() => store.total);
</script>
