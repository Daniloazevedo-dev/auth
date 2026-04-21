<template>
  <div id="base-input-wrapper" class="flex flex-col gap-1">
    <label
      v-if="label"
      :for="inputId"
      class="text-sm font-medium text-gray-300"
    >
      {{ label }}
    </label>
    <div class="relative">
      <input
        :id="inputId"
        v-bind="$attrs"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        class="w-full rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        @input="onInput"
      />
      <slot name="append" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    inputId: {
      type: String,
      default: 'base-input',
    },
  },
  emits: ['update:modelValue'],
  setup(_props, { emit }) {
    function onInput(event: Event) {
      emit('update:modelValue', (event.target as HTMLInputElement).value)
    }
    return { onInput }
  },
})
</script>
