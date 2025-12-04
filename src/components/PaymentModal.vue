<script setup lang="ts">
const emit = defineEmits(["close", "clear-cart"]);
</script>

<template>
    <div
        class="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
    >
        <div
            class="bg-white w-full max-w-sm p-6 rounded-2xl shadow-xl text-center animate-popup"
        >
            <div class="flex justify-center mb-3">
                <div
                    class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl"
                >
                    ✓
                </div>
            </div>

            <h2 class="text-2xl font-bold text-emerald-600">
                Payment Successful
            </h2>

            <p class="text-gray-600 mt-2">
                Your order has been processed successfully.
            </p>

            <button
                class="mt-6 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition font-semibold"
                @click="
                    emit('close');
                    emit('clear-cart');
                "
            >
                OK
            </button>
        </div>
    </div>
</template>

<style scoped>
@keyframes popup {
    0% {
        transform: scale(0.8);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
.animate-popup {
    animation: popup 0.25s ease-out;
}
</style>
