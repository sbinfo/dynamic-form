<script setup lang="ts">
interface PropsType {
	value: string
	placeholder?: string
}

const props = defineProps<PropsType>()
</script>

<template>
	<input
		:value="props.value"
		type="text"
		:placeholder="props.placeholder"
		class="df-input"
	/>
</template>

<style scoped>
.df-input {
	padding: 10px;
	border-radius: 16px;
	min-width: 240px;
}
</style>
