<template>
    <div class="cart">
        <div class="items">
            <card-items
            v-for="product in products"
            :key="product.id"
            :product="product"
            />
        </div>
        <div class="items-total">
            <card-items-total
            :products="products"
            />
        </div>
    </div>
</template>
<script>
import cardItems from '../components/products/cardItems.vue'
import cardItemsTotal from '../components/products/cardItemsTotal.vue'
export default {
    name:"Card",
    components:{
        cardItems,
        cardItemsTotal
    },
    computed:{
        products() {
            return this.$store.getters.cartItems
        }
    },
    
}
</script>
<style lang="scss">
    
</style>
