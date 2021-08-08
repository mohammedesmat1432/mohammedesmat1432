<template>
    <div class="details-background" :class="{show: active}" @click="$emit('close-product-details')"/>

        <div class="details" :class="{show: active}"> 
            <div class="details-closer" @click="$emit('close-product-details')">x</div>

            <div v-if="product" class="about-product">
                <h3 class="name">{{product.name}}</h3>
                <p class="description">{{product.description}}</p>
                <h3 class="price">${{product.price.toFixed(2)}}</h3>

                <div class="button-details">
                    <button class="remove" @click="removeFromCart()">remove</button>
                    <button class="add" @click="addToCart()">add</button>
                </div>

                <div class="quantity" v-if="product_quantity">
                    <h3>Quantity: {{product_quantity}}</h3>
                    <h3>Total: ${{product_quantity * product.price}}</h3>
                    
                </div>


            </div>
        </div>
</template>
<script>
export default {
    props:['product','active'],
    methods:{
        addToCart() {
            this.$store.commit('addToCart', this.product)
        },
         removeFromCart() {
            this.$store.commit('removeFromCart', this.product)
        }
    },
    computed: {
        product_quantity(){
            return this.$store.getters.productQuantity(this.product)
        },
    }
}
</script>
<style lang="scss" >
    .details-background{
        width: 100%;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(190, 176, 176, 0.788);
        z-index: 100;
        display: none;
        transition: display .5s;

        &.show{
            display: block;
        }
    }
    .details{
        width: 40vw;
        height: 100vh;
        padding: 15px;
        position: fixed;
        top: 0;
        left: -105vw;
        z-index: 101;
        background-color: white;
        overflow-y: scroll;
        transition: left .5s;

        &.show{
            left: 0;
        }
    }
    .details-closer{
        padding: 5px;
        width: 15px;
        border: 1px solid gray;
        color: gray;
        font-size: 1.5rem;
        right: 10px;
        float: right;
        cursor: pointer;

        &:hover{
            background: lightgray;
        }
    }
    .about-product{
        display: flex;
        justify-content: center;
        flex-direction: column;

        p.description{
            line-height: 1.5rem;
            padding: 20px;
        }
        .button-details{
            button{
                width: 150px;
                padding: 10px;
                border: none;
                border-radius: 5px;
                margin: 0 5px 50px 5px;
                cursor: pointer;
                color: white;
                font-weight: bold;
            }
            button.add{
                background-color: rgb(63, 166, 207);
            }
            button.remove{
                background-color: rgb(245, 76, 76);
            }
        }
    }
    @media (width: 500px){
        .details{
            width: 450px;
        }
    }
</style>