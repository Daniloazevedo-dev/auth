<template>
  <div class="min-h-screen bg-gray-950 flex items-center justify-center px-4">
    <div class="bg-gray-900 rounded-3xl shadow-2xl p-10 max-w-sm w-full space-y-6">

      <div class="text-center space-y-2">
        <h1 class="text-2xl font-bold text-white">Recuperar senha</h1>
        <p class="text-gray-500 text-sm">Informe seu e-mail para receber o link de recuperação.</p>
      </div>

      <BaseInput
        v-model="email"
        input-id="recovery-email"
        label="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseInput from '../components/BaseInput.vue'

export default defineComponent({
  name: 'RecuperarSenhaPage',
  components: { BaseInput },
  setup() {
    const email = ref('')
    return { email }
  },
})
</script>
