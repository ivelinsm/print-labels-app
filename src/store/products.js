import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useProductsStore = defineStore("products", () => {
    const flavors = [
        {
            id: "cola",
            label: "Кола",
            ingredients:
                "захар, вода, оцветител: E150d, киселинност регулиращи вещества: Е338, Е331, природни аромати (вкл. кофеин), подсладител: сукралоза (E955)",
            storage:
                "Да се съхранява на сухо и хладно място, далеч от пряка слънчева светлина.",
            manufacturer:
                'Производител "СЖИ Груп" ЕООД - гр. Добрич, ул. "Калиакра" 54',
        },
        {
            id: "orange",
            label: "Портокал",
            ingredients:
                "захар, вода, концентрат от портокал (2 %), киселинност регулиращи вещества: Е330, Е331, стабилизатори: Е415, Е440, аромати, оцветител: E160a",
            storage:
                "Да се съхранява на тъмно и хладно. Разклатете преди употреба.",
            manufacturer:
                'Производител "СЖИ Груп" ЕООД - гр. Добрич, ул. "Калиакра" 54',
        },
        {
            id: "cherry",
            label: "Вишна",
            ingredients:
                "захар, вода, концентрат от вишна (2 %), киселинност регулиращи вещества: Е330, стабилизатори: Е415, Е440, аромати, оцветител: E163",
            storage:
                "Да се съхранява на тъмно и хладно. Разклатете преди употреба.",
            manufacturer:
                'Производител "СЖИ Груп" ЕООД - гр. Добрич, ул. "Калиакра" 54',
        },
        {
            id: "pineapple",
            label: "Ананас",
            ingredients:
                "захар, вода, концентрат от ананас (2 %), киселинност регулиращи вещества: Е330, Е331, стабилизатори: Е415, аромати, оцветител: E160a",
            storage:
                "Да се съхранява при температура от 0 °C до 25 °C и относителна влажност ≤70 %.",
            manufacturer:
                'Производител "СЖИ Груп" ЕООД - гр. Добрич, ул. "Калиакра" 54',
        },
        // TODO: add remaining 13 flavours here ↓
    ];

    const counts = reactive(
        flavors.reduce((acc, f) => ({ ...acc, [f.id]: 0 }), {})
    );
    const labelsPerRow = reactive({ value: 3 });

    const total = computed(() =>
        Object.values(counts).reduce((s, n) => s + n, 0)
    );

    const increment = (id) => {
        counts[id] += 1;
    };
    const decrement = (id) => {
        if (counts[id] > 0) counts[id] -= 1;
    };
    const setCount = (id, n) => {
        counts[id] = Math.max(0, n);
    };
    const reset = (id) => {
        counts[id] = 0;
    };
    const setLabelsPerRow = (n) => {
        labelsPerRow.value = Math.min(Math.max(parseInt(n, 10) || 1, 1), 4);
    };

    return {
        flavors,
        counts,
        labelsPerRow,
        total,
        increment,
        decrement,
        setCount,
        reset,
        setLabelsPerRow,
    };
});
