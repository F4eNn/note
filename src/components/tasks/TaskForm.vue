<!-- @format -->

<template>
	<FormBox
		@handle-action="createTasksAndRefresh"
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
import { useTasks } from '@/store/taskStore';
import { storeToRefs } from 'pinia';

const taskInput = ref('');
const errorMsg = ref('');
const successMsg = ref('');

const { addTask } = useTasks();

const createTasksAndRefresh = async () => {
	const { errorMessage, successMessage } = await addTask(taskInput.value);
	errorMsg.value = errorMessage;
	successMsg.value = successMessage;

	if (!errorMsg.value) {
		emits('refetch-on-submit');
		taskInput.value = '';
	}
};

const emits = defineEmits(['refetch-on-submit']);
</script>
