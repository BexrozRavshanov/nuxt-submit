<template>
  <div>
    <input
      v-mask="'+998 ## ### ## ##'"
      type="text"
      v-model="phoneNumber"
      placeholder="+998 12 345 67 89"
    />
    <p>Phone: {{ phoneNumber }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const phoneNumber = ref("+998");
</script>
