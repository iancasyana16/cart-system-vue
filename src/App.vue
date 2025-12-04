<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "./stores/CartStore";

import Cart from "./components/Cart.vue";
import InvoiceModal from "./components/InvoiceModal.vue";
import ProductList from "./components/ProductList.vue";
import PaymentModal from "./components/PaymentModal.vue";

const payment = ref(false);
const showInvoice = ref(false);

const cartStore = useCartStore();

const handlePaymentClose = () => {
    payment.value = false;
    showInvoice.value = false;
    cartStore.clearCart();
};
</script>

<template>
    <div class="min-h-screen bg-emerald-600">
        <header class="bg-emerald-800 shadow-sm border-b">
            <div class="max-w-6xl mx-auto px-4 py-6">
                <h1 class="text-3xl font-bold text-white">Vue Cart System</h1>
                <p class="text-white">
                    Vite + Vue 3 + TypeScript + Tailwind + Pinia
                </p>
            </div>
        </header>

        <main
            class="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            <div class="md:col-span-2">
                <ProductList />
            </div>
            <div class="md:col-span-1">
                <Cart @checkout="showInvoice = true" />
            </div>

            <InvoiceModal
                v-if="showInvoice"
                @close="showInvoice = false"
                @bill="payment = true"
            />

            <PaymentModal
                v-if="payment"
                @close="handlePaymentClose"
                @clear-cart="cartStore.clearCart()"
            />
        </main>
    </div>
</template>
