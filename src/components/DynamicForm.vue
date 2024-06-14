<script setup lang="ts">
import DynamicField from "./DynamicField.vue"
import { useFormStore } from "../store"

const store = useFormStore()

const handleFocusOut = () => {
    store.setSearchText("")
}

</script>

<template>
	<form class="dynamic-form">
        <div class="search-panel">
            <h3 class="search-panel__title">Dynamic Form</h3>
            <input
                v-model="store.searchText"
                type="search"
                placeholder="Search..."
                :style="{backgroundColor: store.isMatch ? '#4caf50' : ''}"
                @focusout="handleFocusOut"
            />
        </div>

        <div
            v-for="(field, fieldIndex) in store.fields"
            :key="field.id"
            class="dynamic-form__item"
        >
            <DynamicField
                :model-value="field.value"
                :is-match="field.isMatch"
                :vowels="field.vowels"
                :isLast="store.fields.length === 1"
                :placeholder="`Field ${ fieldIndex + 1 } ...`"
                @update:model-value="(newValue) =>  store.updateFieldValue(newValue, field.id)"
                @delete="() => store.deleteField(field.id)"
            />
        </div>

        <button
            :disabled="store.fields.length === 10"
            @click.prevent="store.addField"
            class="btn-add-field"
        >
            Add Field
        </button>
	</form>
</template>
