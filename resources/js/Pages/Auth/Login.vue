<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="form.post('/app/login')" class="max-w-sm">
      <n-input type="email" v-model:value="form.email" placeholder="Email" class="mb-3" />
      <n-input type="password" v-model:value="form.password" placeholder="Password" class="mb-3" />

      <n-button attr-type="submit">
        Login
      </n-button>
    </form>
  </div>
</template>

<script>
  import AuthLayout from '@/Layouts/Auth.vue'
  import { useForm } from '@inertiajs/inertia-vue3'

  export default {
    layout: AuthLayout,

    setup() {
      const form = useForm({
        email: '',
        password: ''
      })

      return { form }
    }
  }
</script>