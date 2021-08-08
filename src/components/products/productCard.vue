<template>
    <div class="card">
        <h3 v-format.red="10">{{ product.name }}</h3>
        <img :src="product.image" />
        <h5 class="price">Price: ${{ product.price.toFixed(2) }}</h5>
        <p class="description">{{ description }}</p>
        <p class="category">{{ product.category }}</p>
        <button
            class="veiw-product-button"
            @click="$emit('view-product', product)"
        >
            Veiw Product
        </button>
    </div>
</template>
<script>
export default {
    name: "productCard",
    props: ["product"],
    computed: {
        description() {
            return this.product.description.substring(0, 50);
        }
    },
    directives: {
        format: {
            bind: function(el, binding) {
                el.style.fontSize = binding.value + "px";
                if (binding.modifiers.red) {
                    el.style.color = "red";
                }
            },
        },
    }
};
</script>
<style lang="scss">
.card {
    width: 80%;
    margin: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px gray;
    img {
        width: 30%;
        height: 50px;
    }
    h5.price {
        color: gray;
    }
    p {
        color: gray;
    }
    p.description {
        font-size: 0.85rem;
    }
}
button.veiw-product-button {
    background: rgb(63, 166, 207);
    color: #fff;
    font-weight: bold;
    font-size: 1.15rem;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
@media (min-width: 500px) {
    .card {
        width: 350px;
        margin: 10px;
    }
}
</style>
