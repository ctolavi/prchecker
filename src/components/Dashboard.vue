<template>
  <div>
    My work
    <v-data-table
      :headers="headers"
      :items="myPrs"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <!--{{props}}-->
        <td>{{ props.item.author.display_name }}</td>
        <td>{{ props.item.created_on }}</td>
        <td>{{ props.item.description }}</td>
        <td>{{ props.item.destination.repository.full_name }}</td>
        <td>{{ props.item.destination.branch.name }}</td>
      </template>
    </v-data-table>
    My team
    <div v-for="cr in codeReviewers">
      <br>
      <h3>{{cr}}</h3>
      <ul>
        <template v-for="pr2 in myWork.myWork">
          <li v-if="cr === pr2.reviewers[0].username">
            {{pr2.author.display_name + '>>'+pr2.description + '>>' + pr2.created_on}}
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Dashboard',
    data() {
      return {
        headers: [
          { text: 'Author', value: 'display_name' },
          { text: 'Date', value: 'created_on' },
          { text: 'title', value: 'description' },
          { text: 'destination', value: 'destination.repository.full_name' },
          { text: 'branch', value: 'name' },
        ],
      };
    },
    computed: {
      myPrs() {
        return this.myWork.myWork.filter(pr => pr.author.username === this.account.user.userName);
      },
      codeReviewers() {
        const codereviewers = new Map();
        this.myWork.myWork.forEach((pr) => {
          pr.reviewers.forEach((codereviewer) => {
            console.log(`${codereviewer.username}  ${codereviewers.has(codereviewer.username)}`);
            if (!codereviewers.has(codereviewer.username)) {
              codereviewers.set(codereviewer.username, codereviewer);
            }
          });
        });
        return [...codereviewers.keys()];
      },
      ...mapState(['myWork', 'account']),
    },
    beforeMount() {
      this.$store.dispatch('getMyWork');
    },
  };
</script>

<style scoped>

</style>
