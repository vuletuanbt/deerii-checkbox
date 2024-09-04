<template>
  <label>
    <input
      type="checkbox"
      :checked="val === true"
      :disabled="disabled"
      :indeterminate="val === null"
      @click="change"
    />
    <span>
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import '~/style.css'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    disabled?: boolean
    label?: string
    color?: string
  }>(),
  {
    color: '#2f4fef',
    label: 'Checkbox',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | null): void
}>()

const val = ref<boolean | null>(false)

const change = () => {
  if (val.value === false) val.value = null
  else if (val.value === null) val.value = true
  else val.value = false
  emit('update:modelValue', val.value)
}

watch(
  () => props.modelValue,
  (value) => (val.value = value),
)
</script>
