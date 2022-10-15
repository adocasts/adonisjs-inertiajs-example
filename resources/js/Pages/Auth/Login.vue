<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Login</h1>

    <form @submit.prevent="form.post('/app/login')" class="max-w-sm">
      <form-input label="Email" type="email" v-model="form.email" :errors="errors.email" />
      <form-input label="Password" type="password" v-model="form.password" :errors="errors.password" />

      <n-button attr-type="submit">
        Login
      </n-button>
    </form>
  </div>
</template>

<script>
  import AuthLayout from '@/Layouts/Auth.vue'
  import FormInput from '@/components/FormInput.vue'
  import { useForm } from '@inertiajs/inertia-vue3'

  export default {
    layout: AuthLayout,

    props: {
      errors: {
        type: Object,
        default: () => ({})
      }
    },

    components: {
      FormInput
    },

    setup() {
      const form = useForm({
        email: '',
        password: ''
      })

      return { form }
    }
  }
</script>