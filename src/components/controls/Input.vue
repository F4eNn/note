<!-- @format -->
<template>
	<div class="text-black flex flex-col relative w-full mx-auto">
		<label
			v-if="label"
			:for="label"
			>{{ label }}</label
		>
		<input
			type="text"
			:value="modelValue"
			v-bind="$attrs"
			:placeholder="placeholder"
			:class="
				twMerge(
					'placeholder:text-xs border-md p-2  rounded-sm  outline-none focus:outline-green focus:outline-offset-0',
					extendClasses
				)
			"
			@input="e => $emit('update:modelValue', e.target.value)" />
		<span
			class="text-red-500 text-sm absolute left-0 -bottom-6"
			v-if="errorMsg"
			>{{ errorMsg }}
		</span>
	</div>
</template>

<script setup>
import { twMerge } from 'tailwind-merge';

const props = defineProps({
	label: {
		type: [String, Boolean],
		default: true,
	},
	placeholder: {
		type: String,
		default: '',
	},
	modelValue: {
		type: String,
	},
	extendClasses: {
		type: String,
		default: '',
	},
	errorMsg: {
		type: String,
		default: '',
	},
	successMsg: {
		type: String,
		default: '',
	},
});
</script>
