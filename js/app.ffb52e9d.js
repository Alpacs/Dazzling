(function(){var t={11:function(t,a,o){"use strict";var n=o(963),c=o(252),r=o(577),e=o(157),i=o(884),s=o(428);const l=(0,c._)("head",null,[(0,c._)("meta",{charset:"UTF-8"}),(0,c._)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,c._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,c._)("title",null,"Dazzling")],-1),u=(0,c._)("div",{class:"alert"},[(0,c._)("p",null,"Откройте, пожалуйста, в разрешении 1440р, я не упел сделать адаптив.")],-1),d={class:"main_header"},_=(0,c._)("a",{href:"#",class:"logo_main_header"},[(0,c._)("img",{src:e}),(0,c._)("span",null,[(0,c._)("h1",null,"Dazzling"),(0,c._)("p",null,"Isn't it?")])],-1),m={class:"main_nav"},g=(0,c._)("a",{href:"#main_page_preview"},"Главная",-1),p=(0,c._)("a",{href:"#main_catalog"},"Каталог",-1),C=(0,c._)("a",{href:"#footer"},"Контакты",-1),f={class:"button_contact_me"},v={key:0,class:"wrapper_vModalcart"},h={key:1,class:"wrapper_modal_contact"},w=(0,c.Uk)(" > "),k=(0,c._)("div",{class:"main_page_preview",id:"main_page_preview"},[(0,c._)("div",{class:"text_on_main_page"},[(0,c._)("h1",null,"Здесь продаются очки"),(0,c._)("p",null,"Теперь ты знаешь")]),(0,c._)("img",{src:i})],-1),b={id:"main_catalog",class:"main_page"},A={class:"main_page_container_sort"},I=(0,c._)("p",null,"Сортировать по: ",-1),M={class:"main_page_catalog"},D=["data_catalog","id"],y=["src"],O={class:"product_name"},R={class:"product_cost"},j=["onClick"],S=(0,c.uE)('<footer id="footer" class="footer"><div class="link_to_vk"><h1>Ссылка на мою страницу Вконтакте: </h1><a target="»_blank»" href="https://vk.com/kamarilya"><img src="'+s+'"></a></div><div class="link_to_vk"><h1>Ссылка на страницу Вконтакте моего друга,<br> который помог с оформлением: </h1><a target="»_blank»" href="https://vk.com/kakoitochertila"><img src="'+s+'"></a></div></footer>',1);function T(t,a,n,e,i,s){const T=(0,c.up)("vModalcart"),Q=(0,c.up)("vModalContact");return(0,c.wg)(),(0,c.iD)(c.HY,null,[l,(0,c._)("body",null,[u,(0,c._)("header",d,[_,(0,c._)("nav",m,[g,p,(0,c._)("a",{onClick:a[0]||(a[0]=(...t)=>s.showCartModal&&s.showCartModal(...t)),class:"button_show_modal_cart",href:"#"},"Корзина"),C,(0,c._)("span",f,[(0,c._)("a",{onClick:a[1]||(a[1]=(...t)=>s.showContactModalTest&&s.showContactModalTest(...t)),href:"#"},"Связаться со мной")])])]),i.showCart?((0,c.wg)(),(0,c.iD)("div",v,[i.showCart?((0,c.wg)(),(0,c.j4)(T,{key:0,onCloseModal:s.closeCartModal,ref:"vModalcart"},null,8,["onCloseModal"])):(0,c.kq)("",!0)])):(0,c.kq)("",!0),i.showContact?((0,c.wg)(),(0,c.iD)("div",h,[i.showContact?((0,c.wg)(),(0,c.j4)(Q,{key:0,onCloseModalContact:s.closeCartModal,ref:"vModalContact",class:"v_Modal_Contact"},{default:(0,c.w5)((()=>[w])),_:1},8,["onCloseModalContact"])):(0,c.kq)("",!0)])):(0,c.kq)("",!0),k,(0,c._)("main",b,[(0,c._)("div",A,[I,(0,c._)("button",{onClick:a[2]||(a[2]=(...a)=>t.sortInc&&t.sortInc(...a)),class:"sort_inc_cost"},"Возрастанию цены"),(0,c._)("button",{onClick:a[3]||(a[3]=(...a)=>t.sortDec&&t.sortDec(...a)),class:"sort_dec_cost"},"Убыванию цены")]),(0,c._)("section",M,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(t.allProducts,(t=>((0,c.wg)(),(0,c.iD)("div",{class:"product",key:t.article,data_catalog:t,id:t.article},[(0,c._)("div",null,[(0,c._)("img",{src:o(459)("./"+t.img)},null,8,y)]),(0,c._)("div",null,[(0,c._)("p",O,(0,r.zw)(t.name),1),(0,c._)("p",R,(0,r.zw)(t.cost)+"р",1),(0,c._)("button",{onClick:a=>s.inCart(t),class:"button_in_cart"},"В корзину",8,j)])],8,D)))),128))])]),S])],64)}const Q=t=>((0,c.dD)("data-v-6655fbc0"),t=t(),(0,c.Cn)(),t),U={class:"modal_cart"},G=Q((()=>(0,c._)("h1",null,"Корзина",-1))),L=["src"],B={class:"product_name"},N={class:"cost_and_button"},x={class:"inc_and_dev_button"},E=["onClick"],P=["onClick"],q=["onClick"],V={class:"product_cost"},Y={class:"cart_sum"},Z={class:"buttons_close_and_buy"};function F(t,a,n,e,i,s){return(0,c.wg)(),(0,c.iD)("div",U,[G,((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(t.allCart,(a=>((0,c.wg)(),(0,c.iD)("div",{key:a.id,class:"product_in_cart"},[(0,c._)("img",{src:o(459)("./"+a.img)},null,8,L),(0,c._)("p",B,(0,r.zw)(a.name),1),(0,c._)("div",N,[(0,c._)("div",x,[(0,c._)("button",{onClick:o=>t.decCountInCart(a),class:"decrease_button"},"-",8,E),(0,c._)("p",null,(0,r.zw)(a.count_in_cart),1),(0,c._)("button",{onClick:o=>t.incCountInCart(a),class:"increase_button"},"+",8,P)]),(0,c._)("button",{onClick:o=>t.deleteProductFromCart(a),class:"delete_product_button"},"Удалить",8,q),(0,c._)("p",V,(0,r.zw)(a.cost)+" Р",1)])])))),128)),(0,c._)("div",Y,[(0,c._)("p",null,"Общая сумма: "+(0,r.zw)(t.allSumInCart)+" р",1)]),(0,c._)("div",Z,[(0,c._)("button",{onClick:a[0]||(a[0]=(...t)=>s.closeModal&&s.closeModal(...t)),class:"close_modal"},"Закрыть корзину"),(0,c._)("button",{onClick:a[1]||(a[1]=(...t)=>s.buyProducts&&s.buyProducts(...t)),class:"buy_products"},"Заказать")])])}var H=o(907),K={name:"vModalcart",computed:(0,H.Se)(["allProducts","allCart","allSumInCart"]),mounted(){},methods:{...(0,H.nv)(["incCountInCart","decCountInCart","deleteProductFromCart","sortInc"]),closeModal(){this.$emit("closeModal")},buyProducts(){alert("А вот это пока не должно работать.")}}},z=o(744);const W=(0,z.Z)(K,[["render",F],["__scopeId","data-v-6655fbc0"]]);var J=W;const X=t=>((0,c.dD)("data-v-22f929ea"),t=t(),(0,c.Cn)(),t),$={class:"modal_contact"},tt=X((()=>(0,c._)("p",null,"Оправить мне письмо",-1)));function at(t,a,o,n,r,e){return(0,c.wg)(),(0,c.iD)("div",$,[tt,(0,c._)("button",{onClick:a[0]||(a[0]=(...a)=>t.closeModalContact&&t.closeModalContact(...a)),class:"close_modal"}," Закрыть корзину")])}var ot={name:"vModalContact",computed:(0,H.Se)(["allProducts","allCart","allSumInCart"]),method:{...(0,H.nv)([""]),closeModalContact(){this.$emit("closeModalContact")}}};const nt=(0,z.Z)(ot,[["render",at],["__scopeId","data-v-22f929ea"]]);var ct=nt,rt={name:"App",data(){return{showCart:!1,showContact:!1}},components:{vModalcart:J,vModalContact:ct},computed:(0,H.Se)(["allProducts","allCart","allSumInCart"]),methods:{...(0,H.nv)(["getCatalog","addProductToCart","incCountInCart","sortInc","sortDec"]),showCartModal(){this.showCart=!0},showContactModal(){this.showContact=!0},showContactModalTest(){alert("Эта часть не доделана :(")},closeCartModal(){this.showCart=!1,this.showContact=!1},closeContactModal(){this.showContact=!1},inCart(t){0===t.count_in_cart&&t.count>0?this.addProductToCart(t):t.count>0&&this.incCountInCart(t)},moveToCatalog(){const t=document.querySelector(".main_page").getBoundingClientRect(),a=window.pageYOffset||document.documentElement.scrollTop;window.scrollTop=t.top+a,console.log(a)}}};const et=(0,z.Z)(rt,[["render",T]]);var it=et,st=(0,H.MT)({actions:{addProductToCart(t,a){t.commit("addDataCart",a)},deleteProductFromCart(t,a){t.commit("deleteProductFromCart",a)},incCountInCart(t,a){t.commit("incCountInCart",a)},decCountInCart(t,a){t.commit("decCountInCart",a)},sortInc(t){t.commit("sortInc")},sortDec(t){t.commit("sortDec")}},mutations:{updateProducts(t,a){t.data_catalog=a},addDataCart(t,a){a.count--,a.count_in_cart++,t.data_cart.push(a),t.sum_in_cart=t.sum_in_cart+a.cost},deleteProductFromCart(t,a){let o=t.data_cart.indexOf(a);t.sum_in_cart=t.sum_in_cart-a.count_in_cart*a.cost,t.data_catalog[a.article].count=t.data_catalog[a.article].count+t.data_catalog[a.article].count_in_cart,t.data_catalog[a.article].count_in_cart=0,t.data_cart.splice(o)},incCountInCart(t,a){if(a.count_in_cart>0&&a.count>0){let o=t.data_cart.indexOf(a);t.data_cart[o].count_in_cart++,t.data_cart[o].count--,t.sum_in_cart=t.sum_in_cart+a.cost}},decCountInCart(t,a){if(a.count_in_cart>0&&a.count>0){let o=t.data_cart.indexOf(a);t.data_cart[o].count_in_cart--,t.data_cart[o].count++,t.sum_in_cart=t.sum_in_cart-a.cost}},sortInc(t){t.data_catalog.sort(((t,a)=>t.cost-a.cost))},sortDec(t){t.data_catalog.sort(((t,a)=>t.age>a.age?1:-1))}},state:{data_catalog:[{article:0,img:"0.jpg",name:"Очки солнцезащитные Jagermeister",cost:2e3,count:8,count_in_cart:0},{article:1,img:"1.jpg",name:"Солнцезащитные очки RAY-BAN 0RJ9506S 212/19",cost:8e3,count:5,count_in_cart:0},{article:2,img:"2.jpg",name:"Солнцезащитные очки RAY-BAN 0RB3647N 90683F 212/19",cost:18300,count:3,count_in_cart:0},{article:3,img:"3.jpg",name:"Солнцезащитные очки MONCLER ML 0224 01A",cost:32300,count:2,count_in_cart:0},{article:4,img:"4.jpg",name:"Солнцезащитные очки KREUZBERGKINDER KB1559SC2 OLIVER-S C2 AR 61",cost:20300,count:4,count_in_cart:0},{article:5,img:"5.jpg",name:"Солнцезащитные очки KREUZBERGKINDER KBSU0082 EREZ-S C4 MATTE BLK/GUNMET/L AR 54",cost:20300,count:4,count_in_cart:0}],data_cart:[],sum_in_cart:0},getters:{allProducts(t){return t.data_catalog},allCart(t){return t.data_cart},allSumInCart(t){return t.sum_in_cart}}});(0,n.ri)(it).use(st).mount("#app")},459:function(t,a,o){var n={"./0.jpg":597,"./1.jpg":363,"./2.jpg":964,"./3.jpg":31,"./4.jpg":741,"./5.jpg":456,"./icon_footer_vk.png":428,"./logoimg.png":157,"./main_page_preview.png":884};function c(t){var a=r(t);return o(a)}function r(t){if(!o.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=r,t.exports=c,c.id=459},597:function(t,a,o){"use strict";t.exports=o.p+"img/0.ec74b8d0.jpg"},363:function(t,a,o){"use strict";t.exports=o.p+"img/1.17e0e0ac.jpg"},964:function(t,a,o){"use strict";t.exports=o.p+"img/2.5374734f.jpg"},31:function(t,a,o){"use strict";t.exports=o.p+"img/3.cf5dc767.jpg"},741:function(t,a,o){"use strict";t.exports=o.p+"img/4.5ea1b191.jpg"},456:function(t,a,o){"use strict";t.exports=o.p+"img/5.6b7dee70.jpg"},428:function(t){"use strict";t.exports="data:image/png;base64,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"},157:function(t,a,o){"use strict";t.exports=o.p+"img/logoimg.143e322d.png"},884:function(t,a,o){"use strict";t.exports=o.p+"img/main_page_preview.457caf7f.png"}},a={};function o(n){var c=a[n];if(void 0!==c)return c.exports;var r=a[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(a,n,c,r){if(!n){var e=1/0;for(u=0;u<t.length;u++){n=t[u][0],c=t[u][1],r=t[u][2];for(var i=!0,s=0;s<n.length;s++)(!1&r||e>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[s])}))?n.splice(s--,1):(i=!1,r<e&&(e=r));if(i){t.splice(u--,1);var l=c();void 0!==l&&(a=l)}}return a}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,c,r]}}(),function(){o.d=function(t,a){for(var n in a)o.o(a,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){o.p=""}(),function(){var t={143:0};o.O.j=function(a){return 0===t[a]};var a=function(a,n){var c,r,e=n[0],i=n[1],s=n[2],l=0;if(e.some((function(a){return 0!==t[a]}))){for(c in i)o.o(i,c)&&(o.m[c]=i[c]);if(s)var u=s(o)}for(a&&a(n);l<e.length;l++)r=e[l],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},n=self["webpackChunkdazzling"]=self["webpackChunkdazzling"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(11)}));n=o.O(n)})();
//# sourceMappingURL=app.ffb52e9d.js.map