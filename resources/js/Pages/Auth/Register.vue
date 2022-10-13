<template>
  <div>
    <h1>Register</h1>

    <form @submit.prevent="submit" class="max-w-sm">
      <n-input type="email" v-model:value="form.email" placeholder="Email" class="mb-3" />
      <n-input type="password" v-model:value="form.password" placeholder="Password" class="mb-3" />

      <n-button attr-type="submit">
        Register
      </n-button>
    </form>
  </div>
</template>

<script>
  import AuthLayout from '@/Layouts/Auth.vue'
  import { reactive } from 'vue'
  import { Inertia } from '@inertiajs/inertia'

  export default {
    layout: AuthLayout,

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