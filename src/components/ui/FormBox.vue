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

const emits = defineEmits(['add-new-task']);

const handleSubmit = e => {
	e.preventDefault();
	emits('add-new-task');
};
</script>
