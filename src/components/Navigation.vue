<!-- @format -->

<template>
	<ul class="flex gap-10 text-white w-full justify-end px-3.5 py-2">
		<li
			v-for="{ label, path } in navArray"
			class="hover:text-white/70 colors-300">
			<RouterLink
				:to="path"
				class="cursor-pointer"
				:exact-active-class="'active-route'"
				>{{ label }}</RouterLink
			>
		</li>
	</ul>
</template>

<script>
import { navArray } from '@/constants/navigationPaths';
import { useRouter } from 'vue-router';
export default {
	name: 'Navigation',

	setup() {
		const routeName = useRouter().currentRoute.value.fullPath;
		return { navArray, routeName };
	},
};
</script>
