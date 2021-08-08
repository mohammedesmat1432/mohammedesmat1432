<template>
    <div class="card-items">
        <div class="header">
            <h3>{{product.name.substring(0,10)}}</h3>
            <h4>{{product.quantity}}</h4>
            <h4>${{item_cost.toFixed(2)}}</h4>
        </div>
        <p>{{description}}</p>
    </div>
</template>
<script>
export default {
    name: 'cardItems',
    props: ['product'],
    computed: {
        item_cost(){
            return this.product.price * this.product.quantity
        },
        description(){
            return this.product.description.substring(0,120)
        }
    }
}
</script>
<style lang="scss" >
    .card-items{
        width: 40%;
        margin: 5%;
        padding: 10px;
        box-shadow: 0 0 5px gray;
        background-color: white;
        border-radius: 5px;
        text-align: center;
        
        .header{
            display: flex;
            justify-content: space-around;
        }
    }

</style>