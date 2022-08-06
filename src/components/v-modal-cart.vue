<template>
    <div class="modal_cart">
        <h1>Корзина</h1>
        <div 
            v-for="product in allCart"
            :key="product.id"
            class="product_in_cart"
            >
            <img :src="require('../assets/img/' + product.img)">
            <p class="product_name">{{product.name}}</p>
            <div class="cost_and_button">
                <div class="inc_and_dev_button">
                    <button 
                        @click='decCountInCart(product)'
                        class="decrease_button"
                        >-</button>
                    <p>{{ product.count_in_cart }}</p>
                    <button 
                        @click='incCountInCart(product)'
                        class="increase_button"
                        >+</button>
                </div>
                <button 
                    @click="deleteProductFromCart(product)"
                    class="delete_product_button">Удалить</button>
                <p class="product_cost"> {{product.cost}} Р</p>
            </div>
        </div>
        <div class="cart_sum">
            <p>Общая сумма: {{allSumInCart}} р</p>
        </div>
        <div class="buttons_close_and_buy">
            <button 
                @click="closeModal"
                class="close_modal"
            >Закрыть корзину</button>
            <button 
                @click="buyProducts"
                class="buy_products"
            >Заказать</button>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default ({
    name: "vModalcart",
    computed: mapGetters(['allProducts','allCart', 'allSumInCart']),
    mounted() {
    },
    methods: {
        ...mapActions(['incCountInCart',
                       'decCountInCart',
                       'deleteProductFromCart',
                       'sortInc']),
        closeModal() {
            this.$emit('closeModal')
        },
        buyProducts() {         
            alert("А вот это пока не должно работать.")
        },

    },
})
</script>

<style scoped>
.modal_cart {
    position: absolute;
    z-index: 8;
    width: calc(100% / 2.5);

    margin: 5%  0;
    padding: 25px 28px 38px 39px;

    border: 3px solid #5D3F73;
    border-radius: 15px;
    background-color: #fff;
}
.modal_cart h1 {
    font-family: "GT_Eesti_Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 22px;

    color: #6C6273;
}
.product_in_cart, .inc_and_dev_button {
    display: flex;
}
.product_in_cart img {
    width: 117px;
    height: 77px;
}
.product_in_cart p {
    font-family: "GT_Eesti_Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 18px;

    width: calc(100% / 4);
    margin-left: 18px;
}
.cost_and_button {
    position: absolute;
    right: 0;
    width: calc(100% / 3.5);
}
.decrease_button, .increase_button {
    border: 1px solid #000000;
    width: 30px;
    height: 30px;
    border-radius: 45px;
    font-size: 18px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.delete_product_button {
    font-family: "GT_Eesti_Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    background-color: #fff;
    margin-top: 6px;
    margin-left: 33px;
}
.cart_sum {
    display: flex;
    justify-content: flex-end;
    right: 0;
}
.cart_sum p {
    font-weight: 600;
    font-size: 30px;
    line-height: 35px;
}
.buttons_close_and_buy {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.close_modal {
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 20px;
    width: calc(100% / 3.14);
    height: 34px;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
}
.buy_products {
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 20px;
    width: calc(100% / 3.14);
    height: 34px;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
}
.product_cost {
    margin: 0;
    margin-top: 10px;
    margin-left: 5px;
}
@font-face {
    font-family: "GT_Eesti_Pro"; 
    src: url("../assets/fonts/GT_Eesti_Pro/GTEestiProDisplay-RegularItalic.ttf") format("truetype"); 
    font-style: normal; 
    font-weight: normal; 
}
</style>