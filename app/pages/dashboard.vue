<template>
  <div class="min-h-screen bg-gray-950 text-white flex flex-col">
    <AppHeader />
    <div class="p-8">
    <header class="mb-8">
      <h1 class="text-4xl font-bold text-white">Dashboard</h1>
      <p class="text-gray-400 mt-1">Visão geral do sistema</p>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
      <div class="bg-gray-800 rounded-xl p-6">
        <p class="text-gray-400 text-sm mb-1">Usuários</p>
        <p class="text-3xl font-bold text-blue-400">1.240</p>
      </div>
      <div class="bg-gray-800 rounded-xl p-6">
        <p class="text-gray-400 text-sm mb-1">Sessões ativas</p>
        <p class="text-3xl font-bold text-green-400">87</p>
      </div>
      <div class="bg-gray-800 rounded-xl p-6">
        <p class="text-gray-400 text-sm mb-1">Erros hoje</p>
        <p class="text-3xl font-bold text-red-400">3</p>
      </div>
    </div>

    <div class="bg-gray-800 rounded-xl p-6">
      <h2 class="text-lg font-semibold mb-4">Atividade recente</h2>
      <ul class="divide-y divide-gray-700">
        <li class="py-3 flex justify-between text-sm">
          <span class="text-gray-300">Login de <span class="text-white font-medium">admin@email.com</span></span>
          <span class="text-gray-500">há 2 min</span>
        </li>
        <li class="py-3 flex justify-between text-sm">
          <span class="text-gray-300">Novo usuário <span class="text-white font-medium">joao@email.com</span></span>
          <span class="text-gray-500">há 15 min</span>
        </li>
        <li class="py-3 flex justify-between text-sm">
          <span class="text-gray-300">Senha alterada por <span class="text-white font-medium">maria@email.com</span></span>
          <span class="text-gray-500">há 1h</span>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '../components/AppHeader.vue'

export default defineComponent({
  name: 'DashboardPage',
  components: { AppHeader },
})
</script>
