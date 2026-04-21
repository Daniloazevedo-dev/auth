<template>
  <BaseInput
    id="input-password-root"
    :model-value="modelValue"
    :label="label"
    :placeholder="placeholder"
    :type="visible ? 'text' : 'password'"
    input-id="input-password"
    @update:model-value="(val: string) => $emit('update:modelValue', val)"
  >
    <template #append>
      <button
        id="input-password-toggle"
        type="button"
        class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white transition"
        @click="visible = !visible"
      >
        <svg v-if="!visible" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.938 6.938A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.97 9.97 0 01-4.48 5.587M3 3l18 18" />
        </svg>
      </button>
    </template>
  </BaseInput>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseInput from './BaseInput.vue'

export default defineComponent({
  name: 'InputPassword',
  components: { BaseInput },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'Senha',
    },
    placeholder: {
      type: String,
      default: '••••••••',
    },
  },
  emits: ['update:modelValue'],
  setup() {
    const visible = ref(false)
    return { visible }
  },
})
</script>
