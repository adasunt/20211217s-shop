export default [{
        path: '/',
        component: () =>
            import ('@/pages/Home'),
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import ('@/pages/Search'),
    },
    {
        path: '/login',
        component: () =>
            import ('@/pages/Login'),
    },
    {
        path: '/register',
        component: () =>
            import ('@/pages/Register'),
    },
]