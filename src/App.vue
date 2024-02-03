<!-- @format -->

<script setup>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
</script>

<template>
	<Navigation />
	<RouterView />
	<notifications group="task" position="top center"  />
</template>
