<!-- @format -->

<template>
	<div class="border-green rounded-md border-[2px] m-5 gap-10 flex items-center justify-between p-3">
		<div
			v-if="!isEdit"
			class="flex justify-between w-full h-[30px]">
			<p class="text-lg w-3/4">{{ taskContent }}</p>
			<div class="flex justify-center items-center gap-5">
				<IconButton
					@handle-click="toggleEditForm"
					:extendClasses="'stroke-green hover:stroke-lightGreen'">
					<svg
						class="feather feather-edit"
						fill="none"
						height="24"
						stroke=""
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
					</svg>
				</IconButton>
				<IconButton
					@handle-click="() => deleteTask(props.id)"
					:extendClasses="'fill-gray-500 hover:fill-red'">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 30 30"
						width="30px"
						height="30px">
						<path
							d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
					</svg>
				</IconButton>
			</div>
		</div>
		<EditForm
			v-if="isEdit"
			:taskValue="props.taskContent"
			@toggle-edit="toggleEditForm"
			:id="props.id" />
			
	</div>
</template>
<script setup>
import { ref } from 'vue';

import IconButton from '@/components/controls/IconButton.vue';
import { useTasks } from '@/store/taskStore';
import EditForm from '@/components/tasks/EditForm.vue';

const props = defineProps({
	taskContent: {
		type: String,
		default: '',
	},
	id: {
		required: true,
		type: Number,
	},
});

const isEdit = ref(false);
const editContent = ref(props.taskContent);

const store = useTasks();
const { deleteTask } = store;

const toggleEditForm = () => {
	isEdit.value = !isEdit.value;
};

</script>
