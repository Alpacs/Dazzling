
import { createStore } from 'vuex'

export default createStore({
    actions: {
        /*async getCatalog(ctx) {
            const res = await fetch('http://localhost:8081/api/getData')
            const catalog = await res.json()
            ctx.commit('updateProducts', catalog)
        },
        Если бы можно было показать данный проект через свой пк, 
        то я бы делал примерно такой запрос к серверу
        */
        addProductToCart(ctx, product) {
            ctx.commit('addDataCart', product)
        },
        deleteProductFromCart(ctx, product){
            ctx.commit('deleteProductFromCart', product)
        },
        incCountInCart(ctx, product) {
            ctx.commit('incCountInCart', product)
        },
        decCountInCart(ctx, product) {
            ctx.commit('decCountInCart', product)
        },
        sortInc(ctx) {
            ctx.commit('sortInc')
        },
        sortDec(ctx) {
            ctx.commit('sortDec')
        }
    },
    mutations: {
        updateProducts(state, catalog) {
            state.data_catalog = catalog
        },
        addDataCart(state, product) {
            product.count--;
            product.count_in_cart++;
            state.data_cart.push(product)
            state.sum_in_cart=state.sum_in_cart+product.cost;
        },
        deleteProductFromCart(state, product) {
            state.sum_in_cart = state.sum_in_cart - product.count_in_cart*product.cost;
            state.data_catalog[product.article].count = state.data_catalog[product.article].count + state.data_catalog[product.article].count_in_cart;
            state.data_catalog[product.article].count_in_cart = 0;
            state.data_cart = state.data_cart.filter(p => p.article !== product.article);
        },
        incCountInCart(state, product) {
            if(product.count_in_cart > 0 && product.count > 0) {
                let indexOfProductInCart = state.data_cart.indexOf(product);
                state.data_cart[indexOfProductInCart].count_in_cart++;
                state.data_cart[indexOfProductInCart].count--;
                state.sum_in_cart=state.sum_in_cart+product.cost;
            }
        },
        decCountInCart(state, product) {
            if(product.count_in_cart-1 !== 0) {
                let indexOfProductInCart = state.data_cart.indexOf(product);
                state.data_cart[indexOfProductInCart].count_in_cart--;
                state.data_cart[indexOfProductInCart].count++;
                state.sum_in_cart=state.sum_in_cart-product.cost;
            }
        },
        sortInc(state) {
            state.data_catalog.sort((prev, next) => prev.cost - next.cost);
        },
        sortDec(state) {
            state.data_catalog.sort((a, b) => a.age > b.age ? 1 : -1);
        }
    },
    state: {
        data_catalog : [
        {
            'article': 0,
            'img': "0.jpg",
            'name': 'Очки солнцезащитные Jagermeister',
            'cost': 2000,
            'count': 8,
            'count_in_cart': 0
        },
        {
            'article': 1,
            'img': "1.jpg",
            'name': 'Солнцезащитные очки RAY-BAN 0RJ9506S 212/19',
            'cost': 8000,
            'count': 5,
            'count_in_cart': 0
        },
        {
            'article': 2,
            'img': "2.jpg",
            'name': 'Солнцезащитные очки RAY-BAN 0RB3647N 90683F 212/19',
            'cost': 18300,
            'count': 3,
            'count_in_cart': 0
        },
        {
            'article': 3,
            'img': "3.jpg",
            'name': 'Солнцезащитные очки MONCLER ML 0224 01A',
            'cost': 32300,
            'count': 2,
            'count_in_cart': 0
        },
        {
            'article': 4,
            'img': "4.jpg",
            'name': 'Солнцезащитные очки KREUZBERGKINDER KB1559SC2 OLIVER-S C2 AR 61',
            'cost': 20300,
            'count': 4,
            'count_in_cart': 0
        },
        {
            'article': 5,
            'img': "5.jpg",
            'name': 'Солнцезащитные очки KREUZBERGKINDER KBSU0082 EREZ-S C4 MATTE BLK/GUNMET/L AR 54',
            'cost': 20300,
            'count': 4,
            'count_in_cart': 0
        }
        ],
        data_cart: [
            
        ],
        sum_in_cart: 0
    },
    getters: {
        allProducts(state) {
            return state.data_catalog;
        },
        allCart(state) {
            return state.data_cart;
        },
        allSumInCart(state) {
            return state.sum_in_cart;
        }
    }
})    