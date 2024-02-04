<!-- @format -->

<template>
	<Wrapper>
		<TaskForm @refetch-on-submit="handleGetTasks" />
		<Suspense>
			<template #default>
				<TasksList />
			</template>
			<template #fallback>
				<div class="text-center">
					<Loader />
				</div>
			</template>
		</Suspense>
	</Wrapper>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import Wrapper from '@/components/ui/Wrapper.vue';
import TaskForm from '@/components/tasks/TaskForm.vue';
import TasksList from '@/components/tasks/TasksList.vue';
import Loader from '@/components/ui/Loader.vue';
import { useTasks } from '@/store/taskStore';

const store = useTasks();
const { getTasks } = store;

const handleGetTasks = async () => {
	await getTasks();
};
</script>
