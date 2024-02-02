<!-- @format -->

<template lang="">
	<FormBox
		@add-new-task="addNewTask"
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
import { validateInputTask } from '@/constants/validation-rules.js';
import {fetchApi} from '@/utils/fetch-api.js';

const taskInput = ref('');
const errorMsg = ref('');

const addNewTask = async () => {
	errorMsg.value = validateInputTask(taskInput.value);
	if (errorMsg.value) return;

	const options = {};
	const res = await fetchApi();
};
</script>
