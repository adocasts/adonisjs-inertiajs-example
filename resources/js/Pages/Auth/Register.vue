<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Register</h1>

    <form @submit.prevent="submit" class="max-w-sm">
      <form-input label="Email" type="email" v-model="form.email" :errors="errors.email" />
      <form-input label="Password" type="password" v-model="form.password" :errors="errors.password" />

      <n-button attr-type="submit">
        Register
      </n-button>
    </form>
  </div>
</template>

<script>
  import AuthLayout from '@/Layouts/Auth.vue'
  import FormInput from '@/components/FormInput.vue'
  import { reactive } from 'vue'
  import { Inertia } from '@inertiajs/inertia'

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
      const form = reactive({
        email: '',
        password: ''
      })

      const submit = async () => {
        await Inertia.post('/app/register', form)
      }

      return { form, submit }
    }
  }
</script>