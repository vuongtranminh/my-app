import Home from '~/pages';
import PageLayout from '~/pages/PageLayout';
import Page from '~/pages/Page';
import DefaultLayout from '~/layouts/default';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/page', component: PageLayout, layout: DefaultLayout },
    { path: '/page-layout', component: Page, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
