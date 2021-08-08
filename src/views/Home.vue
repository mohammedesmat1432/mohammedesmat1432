<template>
<div class="home">
    <product-card-details 
      :product="product"
      :active="active.product_details"
      v-on:close-product-details="closeProductDetails()"
      />
    <div class="product-container">
      <product-card
      v-for="product in items"
      :key="product.id"
      :product="product"
      v-on:view-product="viewProduct($event)"
      />
    </div>
  </div>
</template>

<script>
import items from '../data/dataItems.js'
import productCard from '../components/products/productCard.vue'
import productCardDetails from '../components/products/productCardDetails.vue'

export default {
  name: 'Home',
  components: {
    productCard,
    productCardDetails
  },
  data(){
    return {
      items: items,
      product: null,
      active:{
        product_details: false
      }
    }
  },
  methods:{
    viewProduct(product){
      this.product = product;
      this.active.product_details = true;
    },
    closeProductDetails(){
      this.active.product_details = false;
    }
  }
}
</script>
<style  lang="scss" scoped>
  .product-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
