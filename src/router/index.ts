import { createRouter, createWebHashHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';
import localeCache from '@/utils/cache';
import { firstMenu } from '@/utils/map-menus';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/main'
	},

	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login/login.vue')
	},
	{
		path: '/main',
		name: 'main',
		component: () => import('@/views/main/main.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'notFound',
		component: () => import('@/views/not-found/not-found.vue')
	}
];
const router = createRouter({
	routes,
	history: createWebHashHistory()
});
router.beforeEach((to) => {
	if (to.path !== '/login') {
		const token = localeCache.getCathe('token');
		if (!token) {
			return '/login';
		}
	}
	if (to.path === '/main') {
		return firstMenu.url;
	}
});
export default router;
