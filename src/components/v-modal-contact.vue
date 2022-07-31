<template>
    <div class='modal_contact'>
        <p>Оправить мне письмо</p>
        <button 
            @click="closeModalContact"
            class="close_modal">
        Закрыть корзину</button>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default ({
    name: 'vModalContact',
    computed: mapGetters(['allProducts','allCart', 'allSumInCart']),
    method: {
        ...mapActions(['']),
        closeModalContact() {
            this.$emit('closeModalContact')
        },
    }
})
</script>
<style scoped>
    .modal_contact {
        position: absolute;
        z-index: 10;
        width: calc(100% / 2.5);
        height: 500px;

        margin: 5%  0;
        padding: 25px 28px 38px 39px;

        border: 3px solid #5D3F73;
        border-radius: 15px;
        background-color: #fff;
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
</style>