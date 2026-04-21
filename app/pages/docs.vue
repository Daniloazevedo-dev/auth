<template>
  <div class="min-h-screen bg-gray-950 text-white">

    <!-- Sidebar -->
    <aside class="fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-800 p-6 flex flex-col gap-6">
      <div>
        <div class="flex items-center gap-3 mb-8">
          <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-black text-sm">A</span>
          </div>
          <span class="font-bold text-white">Auth Docs</span>
        </div>
        <nav class="flex flex-col gap-1">
          <a
            v-for="section in sections"
            :key="section.id"
            :href="`#${section.id}`"
            class="text-sm px-3 py-2 rounded-lg transition"
            :class="activeSection === section.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'"
            @click.prevent="scrollTo(section.id)"
          >
            {{ section.title }}
          </a>
        </nav>
      </div>
    </aside>

    <!-- Conteúdo -->
    <main class="ml-64 p-10 max-w-4xl">

      <div class="mb-12">
        <h1 class="text-4xl font-extrabold mb-3">Documentação</h1>
        <p class="text-gray-400 text-lg">Guia técnico do sistema de autenticação.</p>
      </div>

      <!-- Visão Geral -->
      <section id="overview" class="mb-14">
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Visão Geral</h2>
        <p class="text-gray-300 leading-relaxed mb-4">
          Este projeto é um sistema de autenticação construído com <strong class="text-white">Nuxt 4</strong>, <strong class="text-white">Supabase</strong> e <strong class="text-white">Tailwind CSS</strong>. Oferece login com email/senha, redirecionamento automático por sessão e uma base extensível para aplicações que exigem controle de acesso.
        </p>
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-gray-800 rounded-xl p-4 text-center">
            <p class="text-blue-400 font-bold text-lg">Nuxt 4</p>
            <p class="text-gray-400 text-xs mt-1">Framework</p>
          </div>
          <div class="bg-gray-800 rounded-xl p-4 text-center">
            <p class="text-green-400 font-bold text-lg">Supabase</p>
            <p class="text-gray-400 text-xs mt-1">Auth & Database</p>
          </div>
          <div class="bg-gray-800 rounded-xl p-4 text-center">
            <p class="text-purple-400 font-bold text-lg">Tailwind</p>
            <p class="text-gray-400 text-xs mt-1">Estilização</p>
          </div>
        </div>
      </section>

      <!-- Páginas -->
      <section id="pages" class="mb-14">
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Páginas</h2>
        <div class="flex flex-col gap-3">
          <div v-for="page in pages" :key="page.route" class="bg-gray-800 rounded-xl p-4 flex items-start gap-4">
            <span class="bg-gray-700 text-blue-300 font-mono text-sm px-2 py-1 rounded">{{ page.route }}</span>
            <div>
              <p class="text-white font-medium">{{ page.name }}</p>
              <p class="text-gray-400 text-sm">{{ page.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Componentes -->
      <section id="components" class="mb-14">
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Componentes</h2>
        <div class="flex flex-col gap-3">
          <div v-for="comp in components" :key="comp.name" class="bg-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between mb-1">
              <p class="text-white font-mono font-medium">{{ comp.name }}</p>
              <span class="text-xs text-gray-500 bg-gray-700 px-2 py-0.5 rounded">{{ comp.file }}</span>
            </div>
            <p class="text-gray-400 text-sm mb-2">{{ comp.description }}</p>
            <div v-if="comp.props.length" class="flex flex-wrap gap-2">
              <span v-for="prop in comp.props" :key="prop" class="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded font-mono">{{ prop }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Composables -->
      <section id="composables" class="mb-14">
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Composables</h2>
        <div class="bg-gray-800 rounded-xl p-5">
          <p class="text-white font-mono font-medium mb-1">useAuth()</p>
          <p class="text-gray-400 text-sm mb-4">Gerencia autenticação via Supabase.</p>
          <div class="flex flex-col gap-2">
            <div v-for="fn in authFunctions" :key="fn.name" class="flex items-start gap-3">
              <span class="font-mono text-sm text-green-400 whitespace-nowrap">{{ fn.name }}</span>
              <span class="text-gray-400 text-sm">{{ fn.description }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Fluxo de Auth -->
      <section id="flow" class="mb-14">
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Fluxo de Autenticação</h2>
        <ol class="flex flex-col gap-3">
          <li v-for="(step, i) in flowSteps" :key="i" class="flex items-start gap-4">
            <span class="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold shrink-0">{{ i + 1 }}</span>
            <p class="text-gray-300 pt-0.5">{{ step }}</p>
          </li>
        </ol>
      </section>

      <!-- Variáveis de Ambiente -->
      <section id="env" class="mb-14">
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Variáveis de Ambiente</h2>
        <div class="bg-gray-900 rounded-xl p-5 font-mono text-sm border border-gray-700">
          <p class="text-gray-500 mb-2"># .env</p>
          <p><span class="text-blue-300">SUPABASE_URL</span><span class="text-gray-400">=</span><span class="text-green-300">https://seu-projeto.supabase.co</span></p>
          <p><span class="text-blue-300">SUPABASE_KEY</span><span class="text-gray-400">=</span><span class="text-green-300">sua-anon-key</span></p>
        </div>
      </section>

    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DocsPage',
  setup() {
    const activeSection = ref('overview')

    const sections = [
      { id: 'overview', title: 'Visão Geral' },
      { id: 'pages', title: 'Páginas' },
      { id: 'components', title: 'Componentes' },
      { id: 'composables', title: 'Composables' },
      { id: 'flow', title: 'Fluxo de Auth' },
      { id: 'env', title: 'Variáveis de Ambiente' },
    ]

    const pages = [
      { route: '/', name: 'Index', description: 'Página inicial. Redireciona para /login se não autenticado.' },
      { route: '/login', name: 'Login', description: 'Formulário de autenticação com email e senha.' },
      { route: '/confirm', name: 'Confirm', description: 'Callback do Supabase após autenticação. Redireciona para / quando sessão ativa.' },
      { route: '/dashboard', name: 'Dashboard', description: 'Área protegida com métricas e atividade recente.' },
      { route: '/docs', name: 'Docs', description: 'Esta página. Documentação técnica do sistema.' },
    ]

    const components = [
      {
        name: 'BaseInput',
        file: 'BaseInput.vue',
        description: 'Input genérico com suporte a label, placeholder e v-model. Expõe slot "append" para conteúdo adicional.',
        props: ['modelValue', 'label', 'placeholder', 'type', 'inputId'],
      },
      {
        name: 'InputPassword',
        file: 'InputPassword.vue',
        description: 'Campo de senha baseado no BaseInput com botão de toggle para exibir/ocultar a senha.',
        props: ['modelValue', 'label', 'placeholder'],
      },
      {
        name: 'BaseButton',
        file: 'BaseButton.vue',
        description: 'Botão com variantes primary/secondary, estado de loading com spinner e suporte a disabled.',
        props: ['type', 'variant', 'loading', 'disabled'],
      },
      {
        name: 'LoginForm',
        file: 'LoginForm.vue',
        description: 'Formulário de login com campos email e senha. Emite evento "submit" com os dados do formulário.',
        props: ['loading'],
      },
    ]

    const authFunctions = [
      { name: 'login(email, password)', description: 'Autentica o usuário via Supabase. Lança erro em caso de falha.' },
      { name: 'logout()', description: 'Encerra a sessão ativa do usuário.' },
    ]

    const flowSteps = [
      'Usuário acessa qualquer rota protegida.',
      'O middleware do @nuxtjs/supabase verifica a sessão.',
      'Sem sessão ativa → redireciona para /login.',
      'Usuário preenche email e senha no LoginForm.',
      'useAuth().login() chama o Supabase Auth.',
      'Com sucesso → sessão criada e redirecionamento para /.',
      'Para sair, chamar useAuth().logout().',
    ]

    function scrollTo(id: string) {
      activeSection.value = id
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return { sections, pages, components, authFunctions, flowSteps, activeSection, scrollTo }
  },
})
</script>
