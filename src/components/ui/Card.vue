<!-- @format -->

<template>
	<div :class="twMerge('rounded-md bg-white p-3', '')">
		<slot />
	</div>
</template>
<script setup>
import { twMerge } from 'tailwind-merge';
</script>
