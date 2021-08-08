<template>
    <div class="card-items-total">
        <h3>Total: ${{product_total.toFixed(2)}}</h3>

        <button class="veiw-product-button">Pay By Credit Cart</button>
    </div>
</template>

<script>

export default {
    name: 'cardItemsTotal',
    computed: {
        product_total(){
            return this.$store.getters.productTotal
        }
    }

}
</script>
<style lang="scss">
    .card-items-total{
        width: 40%;
        margin: 5%;
        padding: 10px;
        box-shadow: 0 0 5px gray;
        background-color: white;
        border-radius: 5px;
        text-align: center;
    }
</style>