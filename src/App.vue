<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout v-if="!account.user.userName">
        <v-flex xs3 offset-xs5>
          <v-text-field class="pt-3" prepend-icon="person" name="login" label="Login" single-line type="text"
                        v-model="credentials.userName"></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-text-field class="pt-3" prepend-icon="lock" name="password" label="Password" single-line id="password"
                        v-model="credentials.password"
                        type="password"></v-text-field>
        </v-flex>
        <v-flex xs1 pt-2>
          <v-btn flat pt-3 color="primary" :disabled="(!credentials.userName || !credentials.password)"
                 @click="login(credentials)">Login
          </v-btn>
        </v-flex>
      </v-layout>
      <v-toolbar-items v-if="account.user.userName" class="hidden-sm-and-down pt-2 pd-2 ">
        <v-avatar class="mr-2">
          <img :src="account.user.avatar" alt="avatar">
        </v-avatar>
        <v-select
          items="logout"
          overflow
          :label="account.user.displayName"
          target="#dropdown-example"
          class="username"
        ></v-select>
      </v-toolbar-items>
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
  .username {
    width: 220px;
  }
</style>
