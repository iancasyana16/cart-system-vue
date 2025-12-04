<script setup lang="ts">
import { useCartStore } from "../stores/cartStore";

const cartStore = useCartStore();
const emit = defineEmits(["checkout"]);
</script>

<template>
    <div class="bg-white rounded-lg shadow-lg p-6 sticky top-4">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold">
                Cart ({{ cartStore.totalItems }})
            </h2>
            <button
                v-if="cartStore.items.length"
                @click="cartStore.clearCart"
                class="text-red-500 text-sm hover:underline"
            >
                Delete all
            </button>
        </div>

        <div
            v-if="cartStore.items.length === 0"
            class="text-center py-12 text-gray-500"
        >
            Empty cart
        </div>

        <div v-else>
            <div
                v-for="item in cartStore.items"
                :key="item.id"
                class="flex items-center gap-4 py-3 border-b"
            >
                <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-24 h-24 rounded-2xl object-cover shadow-xl"
                />
                <div class="flex-1">
                    <h4 class="font-medium">{{ item.name }}</h4>
                    <p class="text-sm text-gray-600">
                        ${{ item.price }} x {{ item.quantity }}
                    </p>
                </div>
                <div class="flex items-center gap-2">
                    <button
                        @click="cartStore.decreaseQuantity(item.id)"
                        class="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-600 text-white"
                    >
                        -
                    </button>
                    <span class="w-8 text-center">{{ item.quantity }}</span>
                    <button
                        @click="cartStore.increaseQuantity(item.id)"
                        class="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-600 text-white"
                    >
                        +
                    </button>
                </div>
            </div>

            <div class="mt-6 pt-6 border-t">
                <div class="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span class="text-green-600"
                        >${{ cartStore.totalPrice }}</span
                    >
                </div>
                <button
                    class="mt-4 w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition font-semibold"
                    @click="emit('checkout')"
                >
                    Checkout
                </button>
            </div>
        </div>
    </div>
</template>
