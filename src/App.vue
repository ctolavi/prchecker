<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout pt-3 v-if="!account.user.userName">
        <v-flex xs3 offset-xs5>
          <v-text-field prepend-icon="person" name="login" label="Login" type="text"
                        v-model="credentials.userName"></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-text-field prepend-icon="lock" name="password" label="Password" id="password"
                        v-model="credentials.password"
                        type="password"></v-text-field>
        </v-flex>
        <v-flex xs1>
          <v-btn color="primary" :disabled="(!credentials.userName || !credentials.password)" @click="login(credentials)">Login</v-btn>
        </v-flex>
      </v-layout>
      <v-layout pt-3 v-if="account.user.userName">
        <v-flex xs2 offset-xs10>
          {{account.user.displayName}}
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer fixed app>
      <span class="copyleft">&copy;</span>
      <span>2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'App',
    data() {
      return {
        title: 'PR checker',
        credentials: {
          userName: '',
          password: '',
        },
      };
    },
    methods: {
      ...mapActions(['login']),
    },
    computed: {
      ...mapState(['account']),
    },
  };
</script>
<style scoped>
  .copyleft {
    display: inline-block;
    transform: rotate(180deg);
  }
</style>
