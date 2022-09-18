<template>
  <div class="bg-slate-100 py-3 px-6 flex justify-between items-center mb-6">
    <div class="flex items-center space-x-6">
      <h3 class="font-bold">AdonisJS InertiaJS Example</h3>
      <nav class="flex items-center text-sm">
        <inertia-link href="/app">Home</inertia-link>
      </nav>
    </div>

    <div class="flex items-center space-x-6 text-sm">
      <inertia-link href="/app/login">Login</inertia-link>
      <inertia-link href="/app/register">Register</inertia-link>
    </div>
  </div>
</template>