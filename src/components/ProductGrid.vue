<template>
    <section>
        <header class="mb-10 mt-10 flex items-center justify-between flex-wrap gap-2">

            <!-- Category toggle  ----------------------------------------------------->
            <div class="ml-10 toggle-wrapper">
                <button @click="handleClick(store.CATEGORIES.CONCENTRATE)"
                    :class="{ active: store.CATEGORIES.CONCENTRATE === store.activeCategory.value }"
                    class="toggle-button">🧃Концентрати</button>
                <button @click="handleClick(store.CATEGORIES.SLUSHY)"
                    :class="{ active: store.CATEGORIES.SLUSHY === store.activeCategory.value }"
                    class="toggle-button">Скрежина❄️</button>
            </div>
            <div class="flex items-center gap-4">
                <button @click="store.resetAll" type="button"
                    class="mr-12 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 ">Нулирай
                    всички</button>
                <!-- <span class="text-lg font-medium">Общо: {{ total }}</span> -->
            </div>
        </header>

        <ul v-if="items.length" class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li v-for="item in items" :key="item.id"
                class="rounded-lg border p-3 flex flex-col gap-2 bg-white shadow-sm"
                :class="{ 'active': store.counts[item.id] > 0 }">
                <h3 class="font-semibold text-center">{{ item.label }} {{ item.emoji }}</h3>
                <div class="flex items-center justify-center gap-2">
                    <button
                        class="items-center px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-30"
                        @click="store.decrement(item.id)" :disabled="store.counts[item.id] === 0">−</button>

                    <input type="number" min="0" class="w-9  text-center border rounded" :value="store.counts[item.id]"
                        @change="event => store.setCount(item.id, parseInt(event.target.value, 10) || 0)" />

                    <button class="px-2 py-1 rounded bg-green-500 text-white hover:bg-green-600"
                        @click="store.increment(item.id)">+</button>

                    <button class="px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 text-xs"
                        @click="store.incrementBy(item.id, fullPageCount)" :title="incrementByTitle">+{{ fullPageCount
                        }}</button>
                </div>

                <button v-if="store.counts[item.id] > 0" class="mt-auto text-xs text-gray-500 hover:underline"
                    @click="store.reset(item.id)">Нулирай</button>
            </li>
        </ul>

        <p v-else class="text-gray-500 italic">Няма продукти в тази категория.</p>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '../store/products.js';

const store = useProductsStore();
const total = computed(() => store.total);
const items = computed(() => store.activeItems);
const fullPageCount = computed(() => {
    return store.activeCategory.value === store.CATEGORIES.CONCENTRATE ? 24 : 12;
});
const incrementByTitle = computed(() => {
    return store.activeCategory.value === store.CATEGORIES.CONCENTRATE ? 'Добави 24' : 'Добави 12';
});

const handleClick = (category) => {
    store.activeCategory.value = category;
};
</script>

<style scoped>
.active {
    background-color: rgba(205, 248, 161, 0.566);
}

.toggle-wrapper {
    display: inline-flex;
    gap: 4px;
    background-color: #e2e2e2;
    border-radius: 8px;
    padding: 4px;
}

.toggle-button {
    padding: 6px 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: 400;
    font-size: 24px;
    opacity: 0.6;
    color: #374151;
    transition: background-color 0.2s;
    border-radius: 6px;

    &.active {
        opacity: 1;
    }
}

.toggle-button:hover {
    background-color: #ffffff;
    border-radius: 6px;
    opacity: 1;
}

.toggle-button.active {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
