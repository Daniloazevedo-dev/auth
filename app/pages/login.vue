<template>
  <div class="min-h-screen bg-gray-950 flex items-center justify-center px-4">
    <div class="bg-gray-900 rounded-3xl shadow-2xl p-10 max-w-sm w-full space-y-8">

      <div class="text-center space-y-2">
        <div class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto">
          <span class="text-white text-2xl font-black">A</span>
        </div>
        <h1 class="text-2xl font-bold text-white">Entrar na conta</h1>
        <p class="text-gray-500 text-sm">Informe suas credenciais para continuar</p>
      </div>

      <p v-if="errorMessage" class="text-red-400 text-sm text-center">{{ errorMessage }}</p>

      <LoginForm :loading="loading" @submit="onSubmit" />

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { navigateTo } from '#app'
import { useSupabaseUser } from '#imports'
import LoginForm from '../components/LoginForm.vue'
import { useAuth } from '../composables/useAuth'

export default defineComponent({
  name: 'LoginPage',
  components: { LoginForm },
  setup() {
    const user = useSupabaseUser()
    const { login } = useAuth()
    const loading = ref(false)
    const errorMessage = ref('')

    watch(user, () => {
      if (user.value) {
        navigateTo('/')
      }
    }, { immediate: true })

    async function onSubmit(form: { email: string; password: string }) {
      loading.value = true
      errorMessage.value = ''
      try {
        await login(form.email, form.password)
        await navigateTo('/')
      } catch (err: unknown) {
        errorMessage.value = err instanceof Error ? err.message : 'Erro ao fazer login.'
      } finally {
        loading.value = false
      }
    }

    return { onSubmit, loading, errorMessage }
  },
})
</script>
