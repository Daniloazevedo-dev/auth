<template>
  <header class="flex items-center justify-between px-10 py-5 border-b border-gray-800">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <span class="text-white font-black text-sm">A</span>
      </div>
      <span class="font-bold text-white text-lg">Auth</span>
    </div>
    <div class="flex items-center gap-4">
      <NuxtLink to="/" class="text-sm text-gray-400 hover:text-white transition">Home</NuxtLink>
      <NuxtLink to="/dashboard" class="text-sm text-gray-400 hover:text-white transition">Dashboard</NuxtLink>
      <NuxtLink to="/docs" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-400 hover:text-white transition">Docs</NuxtLink>
      <span class="text-sm text-gray-500 border-l border-gray-700 pl-4">{{ user?.email }}</span>
      <button
        class="text-sm px-4 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition active:scale-95"
        @click="handleLogout"
      >
        Sair
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSupabaseUser } from '#imports'
import { navigateTo } from '#app'
import { useAuth } from '../composables/useAuth'

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const user = useSupabaseUser()
    const { logout } = useAuth()

    async function handleLogout() {
      await logout()
      await navigateTo('/login')
    }

    return { user, handleLogout }
  },
})
</script>
