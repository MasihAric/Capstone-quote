import Vue from 'vue'
import Router from 'vue-router'
import QuoteofDay from '@/components/QuoteofDay'
import SearchQuote from '@/components/SearchQuote'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'quoteofday',
            component: QuoteofDay
        },
        {
            path: '/SearchQuote',
            name: 'searchQuote',
            component: SearchQuote
        }
    ]
})