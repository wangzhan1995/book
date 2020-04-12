export default [

    {
        path: '/miaosha/:id',
        name: 'Miaosha',
        component: () => import(/* webpackChunkName: "about" */ '../../components/Miaosha.vue'),
        meta: {
            title: '限时抢购'
        }
    },
    {
        path: '/hottui',
        name: 'HotTui',
        component: () => import(/* webpackChunkName: "about" */ '../../components/HotTui.vue'),
        meta: {
            title: '热门推荐'
        }
    },
    {
        path: '/xiang',
        name: 'goodsDetail',
        component: () => import(/* webpackChunkName: "about" */ '../../components/goodsDetail.vue'),
        meta: {
            title: '产品详情'
        }
    },
]