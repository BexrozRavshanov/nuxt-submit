<template>
  <div>
    <form v-on:submit="onFormSubmit($event)">
      <NameInput v-model="userFullName" />
      <PhoneNumber v-model="userNumber" />
      <button :disabled="!isFormValid" type="submit">Submit</button>
      {{ userNumber }}
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { isValidPhoneNumber } from "libphonenumber-js";

let userFullName = ref("");
let userNumber = ref("+998");

const onFormSubmit = (event: any) => {
  if (userFullName.value != "" && userNumber.value != "") {
    console.log(
      `user name is ${userFullName.value} and user number is ${userNumber.value}`
    );
    event.preventDefault();
  } else {
    event.preventDefault();
  }

  if (
    isValidPhoneNumber(userNumber.value, "UZ") &&
    /[^0-9\!\@\#\$\%\^\&\*\(\)]/g.test(userFullName.value)
  ) {
    alert("Everything is ok");
  } else {
    alert("You write something wrong");
  }
};

const isFormValid = computed(
  () => userNumber.value.length == 17 && userFullName.value.length >= 3
);
</script>
