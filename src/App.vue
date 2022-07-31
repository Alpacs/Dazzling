<template>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dazzling</title>
  </head>
  <body>
      <header class="main_header">
          <a href=# class="logo_main_header">
              <img src="./assets/img/logoimg.png">
              <span>
                  <h1>Dazzling</h1>
                  <p>Isn't it?</p>
              </span>
          </a>
          <nav class="main_nav">
              <a href="#main_page_preview">Главная</a>
              <a href="#main_catalog">Каталог</a>
              <a 
                @click="showCartModal"
                class="button_show_modal_cart" 
                href=#>Корзина</a>
              <a href="#footer">Контакты</a>
              <span 
                class="button_contact_me"
              ><a 
                    @click="showContactModalTest"
                    href=#>Связаться со мной</a></span>
           </nav>
      </header>
      <div
        v-if="showCart"
        class="wrapper_vModalcart">
            <vModalcart 
                @closeModal="closeCartModal"
                v-if="showCart"
                ref="vModalcart">
            </vModalcart>
      </div>
      <div    
        v-if='showContact'
        class='wrapper_modal_contact'>
        <vModalContact
            @closeModalContact='closeCartModal'
            v-if="showContact"
            ref="vModalContact"
            class='v_Modal_Contact'>
            >
        </vModalContact>
      </div>
      <div class='main_page_preview'
            id='main_page_preview'>
        <div class='text_on_main_page'>
            <h1>Здесь продаются очки</h1>
            <p>Теперь ты знаешь</p>
        </div>
        <img src='./assets/img/main_page_preview.png'>
      </div>
      <main id="main_catalog" class="main_page">
          <div class="main_page_container_sort">
              <p>Сортировать по: </p>
              <button @click='sortInc' class="sort_inc_cost">Возрастанию цены</button>
              <button @click='sortDec' class="sort_dec_cost">Убыванию цены</button>
          </div>

          <section class="main_page_catalog">
              <div class="product"
                    v-for="product in allProducts"
                    :key="product.article"
                    :data_catalog="product"
                    :id='product.article'
                >
                  <div>
                    <img :src="require('./assets/img/' + product.img)">
                  </div>
                  <div>
                      <p class="product_name">{{ product.name }}</p>
                      <p class="product_cost">{{ product.cost }}р</p>  
                      <button @click="inCart(product)" class="button_in_cart">В корзину</button> 
                  </div> 
              </div>
          </section>
      </main>

      <footer id='footer' class='footer'>
          <div class='link_to_vk'>
              <h1>Ссылка на мою страницу Вконтакте: </h1>
              <a target=»_blank» href='https://vk.com/kamarilya'><img src='./assets/img/icon_footer_vk.png'></a>
          </div>
          <div class='link_to_vk'>
              <h1>Ссылка на страницу Вконтакте моего друга,<br> который помог с оформлением: </h1>
              <a target=»_blank» href='https://vk.com/kakoitochertila'><img src='./assets/img/icon_footer_vk.png'></a>
          </div>
      </footer>
  </body>
</template>

<script>
import vModalcart from './components/v-modal-cart.vue'
import vModalContact from './components/v-modal-contact'

import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'App',
  data() {
      return {
          showCart: false,
          showContact: false
      }
  },
  components: {
      vModalcart,
      vModalContact
  },
  computed: mapGetters(['allProducts','allCart', 'allSumInCart']),
  methods: {
      ...mapActions(['getCatalog',
                    'addProductToCart',
                    'incCountInCart',
                    'sortInc',
                    'sortDec']),
      showCartModal () {
          this.showCart = true;
      },
      showContactModal() {
          this.showContact = true;
      },
      showContactModalTest() {
          alert("Эта часть не доделана :(")
      },
      closeCartModal() {
          this.showCart = false;
          this.showContact = false;
      },
      closeContactModal() {
          this.showContact = false;
      },
      inCart(product) {
          if(product.count_in_cart === 0 && product.count >0) {
              this.addProductToCart(product)
          }
          else if(product.count > 0){
            this.incCountInCart(product)
          }
      },
      moveToCatalog() {
          const elementCoordinates = document.querySelector('.main_page').getBoundingClientRect();
          const windowScroll = window.pageYOffset || document.documentElement.scrollTop;
          window.scrollTop = elementCoordinates.top + windowScroll;
          console.log(windowScroll)
      }
  }
}
</script>

<style>
@import url("./assets/null.css");
* {
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
}
.body {
    max-width: 1440px;
}
.main_header {
    position: fixed;
    display: flex;
    background: #E3CEF2;
    width: 100%;
    height: 103px;
}
.logo_main_header {
    display: flex;
    margin: 14px 0 9px calc(100% / 18.46);
}
.logo_main_header h1 {
    font-family: 'GT_Eesti_Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 35px;
    color: #6C6273;
    margin-bottom: 5px;
}
.logo_main_header span {
    margin-left: 5px;
}
.logo_main_header p {
    font-family: 'GT_Eesti_Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    color: #6C6273;
    margin-left: 2px;
}

.main_nav {
    display: flex;
    margin-left: calc(100% / 8.135);
    width: calc(100% / 1.515);
    height: 65px;

    align-items: center;

    border-radius: 50px;
    border: 2px;
    
}
.main_nav a {
    font-family: 'GT_Eesti_Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;

    color: #6C6273;
    margin-top: 33px;
    margin-right: calc(100% / 59.375);
}
.main_nav a:after {
    display: block;
    content: "";
    width: 0%;
    right: 0;
    height: 2px;
    background-color: #6C6273;
    transition: width .5s ease-in-out;
}
.main_nav a:hover:after,
          a:focus:after {
            width: 102%;
          }
.wrapper_vModalcart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: #5c5b5b59;
}
.wrapper_modal_contact {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: #5c5b5b59;
}
.button_contact_me {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 33px;
    margin-left: calc(100% / 5.965);

    width: calc(100% / 4.72);
    height: 51px;
    border-radius: 35px;
    border: 3px solid #5D3F73;
    background: #fff;
}
.button_contact_me a {
    margin-top: 0;
    font-family: 'GT_Eesti_Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #6C6273;
}
.text_on_main_page {
    margin-top: 150px;
    margin-bottom: 20px;
    padding-left: 35px;
}
.text_on_main_page h1 {
    font-family: 'GT_Eesti_Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 65px;
    color: #6C6273;
    text-align: right;
    margin-bottom: 70px;
}
.text_on_main_page p {
    font-family: 'GT_Eesti_Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #6C6273;
    text-align: center;
}
.main_page_preview {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 133px 200px 0 0;
}
.main_page_preview img {
    right: 0;
    width: 45%;
}

.button_contact_me a:hover:after,
          a:focus:after {
            width: 0%;
          }
.main_header a:active,
              a:hover,
              a {
    text-decoration: none;
    color: #6C6273;
            }
.main_page_container_sort {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 25px;
    padding-right: calc(100% / 6.9);
}
.main_page_container_sort p {
    font-family: 'GT_Eesti_Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 35px;
    margin-right: 24px;
}
.main_page_container_sort button {
    background: #fff;
    font-family: 'GT_Eesti_Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 35px;
    margin-right: 24px;
}
.select_list {
    display: none;
}

.main_page_catalog {
    width: 79.16%;
    margin: 50px auto 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
}
.product_wrapper {
    display: flex;
}
.product {
    width: calc(100% / 5);
    height: 410px;
    margin: 0 calc(100% / 15) 30px calc(100% / 15);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.product img {
    width: 100%;
}
.product_name {
    font-family: 'GT_Eesti_Pro';
    font-style: light;
    font-weight: 300;
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 27px;
    height: 121px;
}
.product_cost {
    font-family: 'GT_Eesti_Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    margin-top: 10px;
    margin-bottom: 25px;
}
.button_in_cart {
    width: calc(100% / 1.8);    
    background: #FFFFFF;
    border: 2px solid #663D5D;
    border-radius: 15px;

    font-family: 'GT_Eesti_Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 29px;
    text-align: center;
}
.footer {
    background: #000;
    width: 100%;
    height: 350px;
    padding: 100px 0 0 0;
}
.footer img {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 45px;
    margin-left: 15px;
}
.link_to_vk {
    display: flex;
    font-size: 25px;
    margin-bottom: 25px;
    color: #fff;
    justify-content: center;
    align-items: center;
    text-align: center;
}

@font-face {
    font-family: "GT_Eesti_Pro"; 
    src: url("./assets/fonts/GT_Eesti_Pro/GTEestiProDisplay-RegularItalic.ttf") format("truetype"); 
    font-style: normal; 
    font-weight: normal; 
}
@font-face {
    font-family: "GT_Eesti_Pro"; 
    src: url("./assets/fonts/GT_Eesti_Pro/GTEestiProDisplay-Light.ttf") format("truetype"); 
    font-style: light; 
    font-weight: normal; 
}
</style>
