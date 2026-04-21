<template>
  <form id="login-form" class="space-y-4" @submit.prevent="emit('submit', form)">
    <BaseInput
      v-model="form.email"
      input-id="login-email"
      label="E-mail"
      type="email"
      placeholder="seu@email.com"
    />
    <InputPassword
      v-model="form.password"
      label="Senha"
      placeholder="••••••••"
    />
    <BaseButton type="submit" :loading="loading">
      Entrar
    </BaseButton>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import BaseInput from './BaseInput.vue'
import InputPassword from './InputPassword.vue'
import BaseButton from './BaseButton.vue'

export default defineComponent({
  name: 'LoginForm',
  components: { BaseInput, InputPassword, BaseButton },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['submit'],
  setup(_props, { emit }) {
    const form = reactive({
      email: '',
      password: '',
    })

    return { form, emit }
  },
})
</script>
