<template>
  <div>
    <input
      type="text"
      placeholder="+998 12 123 12 12"
      v-model="phoneNumber"
      v-mask="'+998 ## ### ## ##'"
      @keydown="handleBackspacePress($event)"
      @input="handleInput"
      ref="phoneInputRef"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch, nextTick } from "vue";

const props = defineProps<{
  modelValue: string;
}>();

const phoneNumber = ref(props.modelValue);
const phoneInputRef = ref<HTMLInputElement | null>(null);

const emit = defineEmits(["update:modelValue"]);

watch(
  () => props.modelValue,
  (newValue: string) => {
    phoneNumber.value = newValue;
  }
);

watch(phoneNumber, (newValue: string) => {
  emit("update:modelValue", newValue);
});

const handleBackspacePress = (event: KeyboardEvent) => {
  const input = phoneInputRef.value;
  if (!input) return;

  const cursorPosition = input.selectionStart || 0;

  if (event.code == "Backspace" && cursorPosition <= 4) {
    event.preventDefault();
  }
};

const handleInput = () => {
  const input = phoneInputRef.value;
  if (!input) return;

  const cursorPosition = input.selectionStart || 0;

  nextTick(() => {
    setCursorPosition(cursorPosition);
  });
};

const setCursorPosition = (position: number) => {
  const input = phoneInputRef.value;
  if (!input) return;
  input.setSelectionRange(position, position);
};
</script>
