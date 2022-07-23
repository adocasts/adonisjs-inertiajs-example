<template>
  <div>
    <Link href="/home">Home</Link>
    <label>Login</label>
    <a href="/home">Anchor Home</a>
  </div>
</template>

<script>
  import AuthLayout from '../../Layouts/Auth.vue'
  export default {
    layout: AuthLayout
  }
</script>

<script setup>
  import { Link } from '@inertiajs/inertia-vue3'
</script>