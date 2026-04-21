<template>
  <button
    id="base-button"
    :type="type"
    :disabled="disabled || loading"
    class="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="variantClasses"
  >
    <span v-if="loading" class="flex items-center justify-center gap-2">
      <span class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      Aguarde...
    </span>
    <slot v-else />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

const VARIANTS: Record<string, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'border border-gray-600 text-gray-300 hover:bg-gray-800',
}

export default defineComponent({
  name: 'BaseButton',
  props: {
    type: {
      type: String as () => 'button' | 'submit' | 'reset',
      default: 'button',
    },
    variant: {
      type: String,
      default: 'primary',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const variantClasses = computed(() => VARIANTS[props.variant] ?? VARIANTS.primary)
    return { variantClasses }
  },
})
</script>
