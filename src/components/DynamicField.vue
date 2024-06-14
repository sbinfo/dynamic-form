<script setup lang="ts">

interface PropsType {
    modelValue: string
    isLast: boolean
    placeholder: string
    isMatch: boolean
    vowels: number
}

interface EmitType {
    (e: 'delete'): void, (e: 'update:modelValue', payload: string ): void
}

const { modelValue, isLast, placeholder, isMatch, vowels } = defineProps<PropsType>()
const emit = defineEmits<EmitType>()

</script>

<template>
    <div class="dynamic-field">
        <span class="vowels">
            Vowels: {{ vowels }}
        </span>
        <div class="dynamic-field__action">
            <input
                :value="modelValue"
                @input="emit('update:modelValue', $event.target?.value)"
                :placeholder="placeholder"
                :style="{backgroundColor: isMatch ? '#4caf50' : ''}"
            />
            <button
                :disabled="isLast"
                @click.prevent="emit('delete')"
            >
                Delete
            </button>
        </div>
    </div>
</template>
