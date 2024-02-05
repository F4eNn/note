<!-- @format -->

<template>
	<button
		v-bind="$attrs"
		:class="twMerge('p-2 text-white bg-green rounded-sm hover:bg-lightGreen colors-300 px-10')">
		{{ text }}
	</button>
</template>

<script setup>
import { twMerge } from 'tailwind-merge';
defineProps({
	extendClasses: {
		type: String,
		default: '',
	},
	text: {
		type: String,
		default: 'Add'
	}
});
</script>
