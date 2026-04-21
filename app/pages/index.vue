<template>
  <div class="min-h-screen bg-gray-950 text-white flex flex-col">

    <AppHeader />

    <!-- Conteúdo -->
    <main class="flex-1 px-10 py-12 max-w-4xl mx-auto w-full">

      <!-- Boas-vindas -->
      <div class="mb-10">
        <h1 class="text-3xl font-extrabold text-white">
          Olá, {{ userName }} 👋
        </h1>
        <p class="text-gray-400 mt-1">Bem-vindo de volta. Tudo certo por aqui.</p>
      </div>

      <!-- Cards rápidos -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        <div v-for="card in cards" :key="card.label" class="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex items-center gap-4">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl" :class="card.bg">
            {{ card.icon }}
          </div>
          <div>
            <p class="text-xs text-gray-500 uppercase tracking-wide">{{ card.label }}</p>
            <p class="text-xl font-bold text-white">{{ card.value }}</p>
          </div>
        </div>
      </div>

      <!-- Ações rápidas -->
      <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Ações rápidas</h2>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/dashboard"
            class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition active:scale-95"
          >
            Ver Dashboard
          </NuxtLink>
          <NuxtLink
            to="/recuperar-senha"
            class="px-4 py-2 border border-gray-700 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-800 transition active:scale-95"
          >
            Alterar senha
          </NuxtLink>
          <NuxtLink
            to="/docs"
            class="px-4 py-2 border border-gray-700 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-800 transition active:scale-95"
          >
            Documentação
          </NuxtLink>
        </div>
      </div>

    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 text-center py-5 text-gray-600 text-xs">
      Auth &copy; {{ new Date().getFullYear() }}
    </footer>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useSupabaseUser } from '#imports'
import AppHeader from '../components/AppHeader.vue'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const user = useSupabaseUser()
    const userName = computed(() => {
      if (!user.value?.email) return 'Usuário'
      return user.value.email.split('@')[0]
    })

    const cards = [
      { label: 'Status', value: 'Ativo', icon: '✅', bg: 'bg-green-900' },
      { label: 'Sessão', value: 'Online', icon: '🟢', bg: 'bg-blue-900' },
      { label: 'Acesso', value: 'Total', icon: '🔐', bg: 'bg-purple-900' },
    ]

    return { user, userName, cards }
  },
})
</script>
