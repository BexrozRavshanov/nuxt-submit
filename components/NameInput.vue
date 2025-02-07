<template>
  <div>
    <div>
      <h2>Write your name</h2>
      <input
        type="text"
        placeholder="Davron"
        @input="getName"
        @keydown="ckeckName($event)"
        v-model="localVaue"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps<{
  modelValue: string;
}>();

let emit = defineEmits(["update:modelValue"]);
let localVaue = ref("");

watch(
  () => props.modelValue,
  () => {
    localVaue.value = props.modelValue;
  }
);

watch(localVaue, (newValue: string) => {
  emit("update:modelValue", newValue);
});

const getName = () => {
  let nameValue = localVaue.value.replace(/[^A-Za-zА-Яа-я ]/g, "");
  nameValue = nameValue
    .toLowerCase()
    .split(" ")
    .map((words: string) => words.charAt(0).toUpperCase() + words.slice(1))
    .join(" ");
  nameValue = nameValue.slice(0, 24);
  nameValue = nameValue.replace(/\s{2,}/g, " ");
  localVaue.value = nameValue;
};

const ckeckName = (event: any) => {
  if (!localVaue.value && event.code === "Space") {
    event.preventDefault();
  }
};
</script>
