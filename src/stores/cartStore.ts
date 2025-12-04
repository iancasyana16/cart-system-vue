import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export const useCartStore = defineStore("cart", () => {
    const items = ref<CartItem[]>([]);

    const addToCart = (product: Product) => {
        const existing = items.value.find((i) => i.id === product.id);
        if (existing) existing.quantity++;
        else items.value.push({ ...product, quantity: 1 });
    };

    const increaseQuantity = (id: number) => {
        const item = items.value.find((i) => i.id === id);
        if (item) item.quantity++;
    };

    const decreaseQuantity = (id: number) => {
        const item = items.value.find((i) => i.id === id);
        if (item && item.quantity > 1) {
            item.quantity--;
        } else {
            items.value = items.value.filter((i) => i.id !== id);
        }
    };

    const clearCart = () => {
        items.value = [];
    };

    const totalItems = computed(() =>
        items.value.reduce((s, i) => s + i.quantity, 0)
    );
    const subtotal = computed(() =>
        items.value.reduce((s, i) => s + i.price * i.quantity, 0)
    );
    const totalPrice = computed(() => subtotal.value);

    return {
        items,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        subtotal,
        totalPrice,
    };
});
