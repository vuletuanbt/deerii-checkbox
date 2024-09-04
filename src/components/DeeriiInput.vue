<template>
  <label>
    <span>
      {{ label }}
    </span>
    <input
      type="text"
      :value="val"
      :disabled="disabled"
      :indeterminate="val === null"
      @click="change"
    />
  </label>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string | null;
    label?: string;
    disabled?: boolean;
    color?: string;
  }>(),
  {
    color: "#2f4fef",
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string | null): void;
}>();

const val = ref<string | null>(null);

const change = () => {
  emit("update:modelValue", val.value);
};

console.log("val", val.value);
console.log(props.modelValue);

watch(
  () => props.modelValue,
  (value) => {
    console.log("watch:value", value);
    val.value = value;
  }
);
</script>
