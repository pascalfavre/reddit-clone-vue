<template>
  <div class="home">
    <button class="button is-danger" @click="login()">Log in with Google</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: mapActions('auth', ['login']),
};
</script>
