<template>
  <div class="min-h-screen bg-gray-950 flex items-center justify-center">
    <div class="text-center space-y-4">
      <div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
      <p class="text-gray-400 text-sm">Aguardando confirmação...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useSupabaseUser } from '#imports'
import { navigateTo } from '#app'

export default defineComponent({
  name: 'ConfirmPage',
  setup() {
    const user = useSupabaseUser()

    watch(user, () => {
      if (user.value) {
        return navigateTo('/')
      }
    }, { immediate: true })
  },
})
</script>
