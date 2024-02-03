<!-- @format -->

<template lang="">
	<FormBox
		@add-new-task="createTasksAndRefresh"
		:extendClasses="'my-20 flex gap-5 w-2/3 mx-auto'">
		<Input
			v-model="taskInput"
			:label="false"
			:placeholder="'Add your task'"
			:errorMsg="errorMsg" />
		<PrimaryButton type="submit" />
	</FormBox>
</template>

<script setup>
import { ref } from 'vue';

import FormBox from '@/components/ui/FormBox.vue';
import Input from '@/components/controls/Input.vue';
import PrimaryButton from '@/components/controls/PrimaryButton.vue';
import { notify } from '@kyvg/vue3-notification';
import { fetchApi } from '@/utils/fetch-api.js';
import { addNewTask } from '@/components/tasks/taskActions.js';

const taskInput = ref('');
const errorMsg = ref('');
const successMsg = ref('');

const createTasksAndRefresh = async () => {
	const { errorMessage, successMessage } = await addNewTask(taskInput.value);
	errorMsg.value = errorMessage;
	successMsg.value = successMessage;
	taskInput.value = ''
};
</script>
