<template>
  <div class="mb-3">
    <label>
      <span v-if="label" class="block font-semibold">{{ label }}</span>
      <n-input :type="type" v-model:value="internalValue" :placeholder="placeholder" />
    </label>
    <div v-if="Array.isArray(errors)" class="text-xs text-red-500">
      {{ errors.join(', ') }}
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    type: {
      type: String,
      default: 'text'
    },
    label: String,
    placeholder: String,
    modelValue: String,
    errors: Array
  })

  const emit = defineEmits(['update:modelValue'])

  const internalValue = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    }
  })
</script>