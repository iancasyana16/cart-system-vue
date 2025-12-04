<script setup lang="ts">
import { useCartStore } from "../stores/CartStore";
import { computed } from "vue";

const emit = defineEmits(["close", "bill"]);
const cartStore = useCartStore();
const invoiceNumber = Math.floor(Math.random() * 900000) + 100000;
const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
});

const items = computed(() => cartStore.items);
const total = computed(() => cartStore.totalPrice);

const handleBill = () => {
    emit("bill");
};
</script>

<template>
    <div
        class="fixed inset-0 bg-black/50 flex items-center justify-center px-4"
    >
        <div
            class="bg-white w-full max-w-lg p-6 rounded-xl shadow-xl animate-fadeIn"
        >
            <h2 class="text-2xl font-bold mb-2">Invoice</h2>
            <p class="text-gray-600 text-sm">
                Invoice No: <b>#{{ invoiceNumber }}</b>
            </p>
            <p class="text-gray-600 text-sm mb-4">Date: {{ today }}</p>

            <div class="border-t pt-4">
                <h3 class="font-semibold mb-2 text-lg">Order Summary</h3>

                <div
                    v-for="item in items"
                    :key="item.id"
                    class="flex justify-between py-2 border-b"
                >
                    <div>
                        <p class="font-medium">{{ item.name }}</p>
                        <p class="text-gray-500 text-sm">
                            {{ item.quantity }} × ${{ item.price }}
                        </p>
                    </div>
                    <p class="font-semibold">
                        ${{ item.price * item.quantity }}
                    </p>
                </div>
            </div>

            <div class="flex justify-between mt-4 text-xl font-bold">
                <span>Total</span>
                <span class="text-green-600">${{ total }}</span>
            </div>

            <div class="mt-6 flex justify-end gap-3">
                <button
                    class="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                    @click="emit('close')"
                >
                    Close
                </button>

                <button
                    class="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                    @click="handleBill"
                >
                    Bill
                </button>
            </div>
        </div>
    </div>
</template>

<style>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.96);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
.animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
}
</style>
