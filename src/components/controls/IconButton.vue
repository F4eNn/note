<!-- @format -->

<template lang="">
	<button :class="twMerge('colors-300 p-1', extendClasses)">
		<slot />
	</button>
</template>
<script setup>

import { twMerge } from 'tailwind-merge';

const props = defineProps({
	extendClasses: {
		type: String,
		default: '',
	},
});
</script>
