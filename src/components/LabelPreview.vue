<template>
    <div v-if="store.totalPages > 0" class="mb-4 text-sm text-gray-600 hide-on-print text-center">
        <span class="ml-auto">Страници: {{ store.totalPages }}</span>
        <span v-if="store.isPageFull" class="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-md">
            📄 Страницата е пълна!
        </span>
        <span v-else class="ml-2">
            ({{ store.labelsOnCurrentPage }}/{{ labelsPerPage }}
            етикета на текущата страница)
        </span>
    </div>
    
    <!-- Multiple pages with automatic pagination -->
    <div v-for="(pageLabels, pageIndex) in paginatedLabels" :key="`page-${pageIndex}`"
         :class="{
            'slushy-wrapper': store.activeCategory.value === store.CATEGORIES.SLUSHY,
            'concentrate-wrapper': store.activeCategory.value === store.CATEGORIES.CONCENTRATE
         }" 
         class="screen-sheet print-sheet border rounded bg-white p-4 grid gap-4 gap-y-5" 
         :style="gridStyle">
        
        <!-- Page number indicator (hidden on print) -->
        <div v-if="store.totalPages > 1" class="col-span-full text-xs text-gray-500 text-center hide-on-print">
            Страница {{ pageIndex + 1 }} от {{ store.totalPages }}
        </div>
        
        <!-- Labels for this page -->
        <div v-for="(label, labelIndex) in pageLabels" :key="`${label.id}-${pageIndex}-${labelIndex}`"
            :class="{
                'slushy-label': store.activeCategory.value === store.CATEGORIES.SLUSHY,
                'concentrate-label': store.activeCategory.value === store.CATEGORIES.CONCENTRATE
            }" 
            class="px-1 py-1 flex flex-col justify-between break-inside-avoid">
            <header :class="{
                'slushy-label-header': store.activeCategory.value === store.CATEGORIES.SLUSHY,
                'concentrate-label-header': store.activeCategory.value === store.CATEGORIES.CONCENTRATE
            }" class=" font-semibold">
                {{ store.activeCategory.value === store.CATEGORIES.CONCENTRATE ? 'КОНЦЕНТРАТ' : 'Ароматна смес за скрежина - ' }}
                <span class="font-bold">{{ label.label.toUpperCase() }}</span>
            </header>

            <section :class="{
                'slushy-label-text': store.activeCategory.value === store.CATEGORIES.SLUSHY,
                'concentrate-label-text': store.activeCategory.value === store.CATEGORIES.CONCENTRATE
            }" class="text-xs leading-snug  flex-1 whitespace-pre-wrap">
                <p v-if="label.ingredients"><strong>Съставки:</strong> {{ label.ingredients }}</p>
                <p v-if="label.storage"><strong>Съхранение:</strong> {{ label.storage }}</p>
                <p v-if="label.manufacturer"><strong>Производител:</strong> {{ label.manufacturer }}</p>
                <p v-if="label.text"> {{ label.text }}</p>
                <p v-if="store.activeCategory.value === store.CATEGORIES.SLUSHY" class="text-base font-semibold">Не е за
                    директна консумация</p>
            </section>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '../store/products.js';

const store = useProductsStore();

// Flatten the catalogue into as many items as the operator requested
const labels = computed(() =>
    store.activeItems.flatMap(p => Array.from({ length: store.counts[p.id] }, () => p)),
);

// Calculate labels per page based on category
const labelsPerPage = computed(() => 
    store.activeCategory.value === store.CATEGORIES.CONCENTRATE ? 24 : 12
);

// Split labels into pages for pagination
const paginatedLabels = computed(() => {
    const allLabels = labels.value;
    const perPage = labelsPerPage.value;
    const pages = [];
    
    for (let i = 0; i < allLabels.length; i += perPage) {
        pages.push(allLabels.slice(i, i + perPage));
    }
    
    return pages;
});

// Dynamic columns controlled by the "labels per row" setting
const gridStyle = computed(() => ({
    gridTemplateColumns: `repeat(${store.labelsPerRow.value}, 1fr)`,
}));
</script>

<style scoped>
/* Base styles for labels */

.slushy-wrapper {
    /* Spacing for slushy labels */
}

.concentrate-wrapper {
    gap: 4px;
}

.slushy-label:nth-child(12n + 13), .slushy-label:nth-child(12n + 14)  {
    /* margin-top: 10mm; */
    /* Add space between pages */   
}

.concentrate-label {
    /* Concentrate label styles */
}

.slushy-label-header {
    font-size: 15px;
}

.concentrate-label-header {
    font-size: 10px;
    line-height: 1.1;
}

.concentrate-label-text {
    font-size: 10px;
    line-height: 1.2;
}

/* Screen preview – match print dimensions for accurate preview */
.screen-sheet {
    width: 210mm;
    /* Match print width (A4 minus margins) */
    height: 297mm;
    /* Match print height (A4 minus margins) */
    grid-auto-rows: max-content;
    /* Add visual border to show the actual printable area */
    border: 1px solid #e5e7eb;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
}

/* Remove margin from last page */
.screen-sheet:last-child {
    margin-bottom: 0;
}

/* Print sheet – use the same dimensions as screen preview */
@media print {
    .hide-on-print {
        display: none;
    }

    .print-sheet {
        width: 210mm;
        /* 210 mm – 2×10 mm */
        min-height: 277mm;
        /* 297 mm – 2×10 mm */
        grid-auto-rows: max-content;
        border: none;
        box-shadow: none;
        margin-bottom: 0;
        break-after: page;
        page-break-after: always;
    }
    
    /* Don't add page break after the last page */
    .print-sheet:last-child {
        break-after: auto;
        page-break-after: auto;
    }
}
</style>