<template>
  <div>
    <Header />
    <main class="px-6">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue'
</script>