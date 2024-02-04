<!-- @format -->

<template lang="">
	<Card>
		<TaskItem
			v-for="{ id, attributes } in tasks"
			:taskContent="attributes.task"
			:key="id" />
	</Card>
</template>

<script setup>
import { onMounted } from 'vue';
import TaskItem from './TaskItem.vue';
import Card from '../ui/Card.vue';
import { storeToRefs } from 'pinia';
import { useTasks } from '@/store/taskStore';

const store = useTasks();
const { getTasks } = store;
const { tasks } = storeToRefs(store);

await getTasks();


</script>
