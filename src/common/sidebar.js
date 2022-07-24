const sideBar = [
    {
        displayName: 'Dashboard',
        route: '/',
        icon: 'bx bx-category-alt',
    },
    {
        displayName: 'Customers',
        route: '/boards',
        icon: 'bx bx-user-pin',
    },
    {
        displayName: 'Products',
        route: '/boards',
        icon: 'bx bx-package',
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
        displayName: 'Orders',
        route: '/boards',
        icon: 'bx bx-cart',
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
