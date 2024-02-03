/** @format */
import { validateInputTask } from '@/constants/validation-rules.js';
import { fetchApi } from '@/utils/fetch-api';
import { notify } from '@kyvg/vue3-notification';

export const addNewTask = async taskInput => {
	const errorMessage = validateInputTask(taskInput);
	if (errorMessage) {
		return { errorMessage };
	}
	const options = { method: 'POST', body: JSON.stringify({ data: { task: taskInput.value } }) };
	const path = 'tasks';
	const { response } = await fetchApi(path, options);

	if (response.ok) {
		notify({ text: 'Created successfully a note', type: 'success', group: 'task' });
		return { successMessage: 'Created succesfully' };
	}
};
