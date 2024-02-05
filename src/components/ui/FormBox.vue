<!-- @format -->

<template>
	<form
		@submit="handleSubmit"
		:class="twMerge('rounded-sm p-3 my-20', extendClasses)">
		<slot class="" />
	</form>
</template>

<script setup>
import { twMerge } from 'tailwind-merge';

const props = defineProps({
	extendClasses: {
		type: String,
		default: '',
	},
});

const emits = defineEmits(['handle-action']);

const handleSubmit = e => {
	e.preventDefault();
	emits('handle-action');
};
</script>
