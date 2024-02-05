<!-- @format -->

<template lang="">
	<FormBox
		@handle-action="handleEdit"
		:extend-classes="' p-0 my-0 flex justify-between items-center w-full gap-10 '">
		<Input
			:label="false"
			v-model="editInput"
			:extend-classes="' border-lightGreen border-[1px] rounded-md p-2'" />
		<PrimaryButton :text="'Save'" />
	</FormBox>
</template>
<script setup>
import { ref } from 'vue';
import Input from '../controls/Input.vue';
import PrimaryButton from '../controls/PrimaryButton.vue';
import FormBox from '@/components/ui/FormBox.vue';
import { useTasks } from '@/store/taskStore';

const props = defineProps({
	taskValue: {
		type: String,
		default: '',
	},
	id: {
		required: true,
		type: Number,
	},
});
const emits = defineEmits(['toggle-edit']);
const { editTask } = useTasks();

const editInput = ref(props.taskValue);

const handleEdit = async () => {
	await editTask(props.id, editInput.value);
	emits('toggle-edit');
};
</script>
