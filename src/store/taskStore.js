/** @format */

import { defineStore } from 'pinia';
import { validateInputTask } from '@/constants/validation-rules.js';
import { fetchApi } from '@/utils/fetch-api';
import { notify } from '@kyvg/vue3-notification';
import { ref } from 'vue';

export const useTasks = defineStore('tasks', () => {
	const tasks = ref([]);

	const addTask = async taskInput => {
		const errorMessage = validateInputTask(taskInput);
		if (errorMessage) {
			return { errorMessage };
		}
		const path = 'tasks';
		const options = { method: 'POST', body: JSON.stringify({ data: { task: taskInput } }) };
		const { res } = await fetchApi(path, options);

		if (res.ok) {
			notify({ text: 'Created successfully a note', type: 'success', group: 'task' });
			return { successMessage: 'Created succesfully' };
		}
	};

	const getTasks = async () => {
		const path = 'tasks';
		const { data, res } = await fetchApi(path);

		if (res.ok) {
			tasks.value = data;
		} else {
			notify({ text: "Couldn't load a tasks", type: 'error', group: 'task' });
		}
	};

	return { getTasks, addTask, tasks };
});