<!-- @format -->

<template>
	<ul class="text-white flex gap-10 w-full justify-end px-3.5 py-2">
		<li v-for="{ label, path } in navArray" class="hover:text-white/70 colors-300 ">
			<RouterLink :to="path" class="cursor-pointer">{{ label }}</RouterLink>
		</li>
	</ul>
</template>

<script>
import { navArray } from '@/constants/navigationPaths';

export default {
	name: 'Navigation',
	setup() {
		return { navArray };
	},
};
</script>
