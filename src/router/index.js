/** @format */

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/DashboardView.vue';
import AccountView from '../views/AccountView.vue';
import { navigationPaths } from '@/constants/navigationPaths';

const routes = [
	{
		path: navigationPaths.home.path,
		name: navigationPaths.home.label,
		component: HomeView,
	},
	{
		path: navigationPaths.dashboard.path,
		name: navigationPaths.dashboard.label,
		component: DashboardView,
	},
	{
		path: navigationPaths.account.path,
		name: navigationPaths.account.label,
		component: AccountView,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
