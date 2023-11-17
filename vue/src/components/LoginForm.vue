<template>
  <div class="flex justify-center">
    <form class="bg-white flex flex-col p-2 w-96 shadow-2xl" formGroup="loginForm">
      <label for="email" class="p-2 text-left">Email address</label>
      <input v-model="loginForm.email" type="text" class="border-2 p-4" id="email" name="email">

     <p
          v-if="$v.email.$dirty && ($v.email.required.$invalid || $v.email.email.$invalid)"
          class="mt-1 text-right text-red"
      >
        This field is required
      </p>

            <label for="password" class="p-2 text-left">Password</label>
            <input v-model="loginForm.password" type="password" class="border-2 p-4" id="password" name="password">

            <p
                v-if="$v.password.$dirty  && $v.password.required.$invalid"
                class="mt-1 text-right text-red"
            >
              This field is required
            </p>

      <button type="submit" class="bg-green mt-4 p-4 color-white font-medium uppercase" @click.prevent="onSubmit">Log in</button>
    </form>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useAuthentication } from '../composables/authentication'
const loginForm = ref({
  email: '',
  password: ''
});

const rules = {
  email: { required, email, $autoDirty: true },
  password: { required, $autoDirty: true },
};

const $v = useVuelidate(rules, loginForm);
const { login } = useAuthentication();
const onSubmit = () => {
  $v.value.$touch();

  if (!$v.value.$invalid) {
    login();
  }
};

</script>

<style lang="scss" module>

</style>