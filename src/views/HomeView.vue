<!-- @format -->

<template>
	<Wrapper>
		<TaskForm />
		<TasksList />
	</Wrapper>
</template>

<script setup>
import Wrapper from '@/components/ui/Wrapper.vue';
import TaskForm from '@/components/tasks/TaskForm.vue';
import TasksList from '@/components/tasks/TasksList.vue';
</script>
