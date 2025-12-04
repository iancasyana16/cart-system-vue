<script setup lang="ts">
import { useCartStore } from "../stores/CartStore";

const cartStore = useCartStore();
const products = [
    {
        id: 1,
        name: "MacBook Pro M4 Max",
        price: 3499,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728952952497",
    },
    {
        id: 2,
        name: "iPhone 16 Pro Max",
        price: 1599,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728952952497",
    },
    {
        id: 3,
        name: "Apple Vision Pro",
        price: 3999,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728952952497",
    },
    {
        id: 4,
        name: 'iPad Pro M4 13"',
        price: 1799,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728952952497",
    },
    {
        id: 5,
        name: "AirPods Pro 2",
        price: 249,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728952952497",
    },
    {
        id: 6,
        name: "Apple Watch Ultra 2",
        price: 799,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728952952497",
    },
];

const addToCart = (product: any) => {
    cartStore.addToCart(product);
};
</script>

<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                v-for="product in products"
                :key="product.id"
                class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
                <div class="relative overflow-hidden">
                    <img
                        :src="product.image"
                        :alt="product.name"
                        class="object-contain group-hover:scale-110 transition-transform duration-700"
                    />

                    <span
                        class="absolute top-6 right-6 bg-linear-to-r from-pink-500 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse"
                    >
                        PREMIUM
                    </span>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-lg">{{ product.name }}</h3>
                    <p class="text-2xl font-bold text-green-600 mt-2">
                        ${{ product.price }}
                    </p>
                    <button
                        @click="addToCart(product)"
                        class="mt-4 w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
