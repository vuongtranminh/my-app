const sideBar = [
    {
        displayName: 'Tài khoản',
        route: '/',
        icon: 'bx bxs-user-circle',
    },
    {
        displayName: 'Customers',
        route: '/boards',
        icon: 'bx bxs-cart',
    },
    {
        displayName: 'Thị trường',
        route: '/boards',
        icon: 'bx bxs-chart',
        subs: [
            {
                displayName: 'Customers',
                route: '/boards',
                icon: 'bx bx-user-pin',
            },
            {
                displayName: 'Products',
                route: '/boards',
                icon: 'bx bx-package',
            },
            {
                displayName: 'Orders',
                route: '/boards',
                icon: 'bx bx-cart',
            },
        ],
    },
    {
        displayName: 'Dịch vụ',
        route: '/boards',
        icon: 'bx bxs-bank',
    },
    {
        displayName: 'Analytics',
        route: '/boards',
        icon: 'bx bx-bar-chart-alt',
    },
    {
        displayName: 'categories',
        route: '/boards',
        icon: 'bx bx-list-ol',
        subs: [
            {
                displayName: 'Customers',
                route: '/boards',
                icon: 'bx bx-user-pin',
            },
            {
                displayName: 'Products',
                route: '/boards',
                icon: 'bx bx-package',
            },
            {
                displayName: 'Orders',
                route: '/boards',
                icon: 'bx bx-cart',
            },
        ],
    },
    {
        displayName: 'discount',
        route: '/boards',
        icon: 'bx bx-gift',
    },
    {
        displayName: 'inventory',
        route: '/boards',
        icon: 'bx bx-store-alt',
    },
    {
        displayName: 'settings',
        route: '/boards',
        icon: 'bx bx-cog',
    },
];

export default sideBar;
