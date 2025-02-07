<!-- <script setup>
import { ref } from "vue";
import { isValidPhoneNumber } from "libphonenumber-js";

import "vue-phone-number-input/dist/vue-phone-number-input.css";

let inputValue = ref("+998");

function CheckValidNumber() {
  if (isValidPhoneNumber(inputValue.value, "UZ")) {
    console.log("Work");
  } else {
    console.log("Dont work");
  }
}
</script>

<template>
  <div>
    <div>
      <h2>first lib.</h2>
      <input
        ref="phoneInputRef"
        v-model="inputValue"
        @change="CheckValidNumber"
      />
    </div>
    <div></div>
  </div>
</template> -->

<template>
  <div>
    <Vue3TelInput v-model="phoneNumber" />
    <p>Введенный номер: {{ phoneNumber }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
import Vue3TelInput from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";

export default defineComponent({
  components: {
    Vue3TelInput,
  },
  setup() {
    const phoneNumber = ref("");
    return {
      phoneNumber,
    };
  },
});
</script>
