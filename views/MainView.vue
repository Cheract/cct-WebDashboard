<template>
  <div class="wrapper">
    <div class="nav-wrapper">
      <div class="test-title">
        <p>위더스제약_세악틸정 250밀리그램</p>
      </div>
      <v-tabs v-model="active_tab">
        <v-tab v-for="tab of tabs" :key="tab.id">{{ tab.title }}</v-tab>
      </v-tabs>
      <v-btn text color="red" @click="goToSigninPage">
        로그아웃
      </v-btn>
    </div>
    <examine-table />
  </div>
</template>

<script>
import ExamineTable from "../src/components/ExamineTable.vue";
export default {
  components: {
    ExamineTable,
  },
  data() {
    return {
      active_tab: 1,
      tabs: [
        { id: 0, title: "대시보드" },
        { id: 1, title: "검수" },
        { id: 2, title: "참여자" },
        { id: 3, title: "설정" },
      ],
    };
  },
  methods: {
    goToSigninPage() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #f9f9ff;
  height: 100%;
  width: 100%;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0px 3px 5px lightgray;
  height: 60px;
  padding-right: 20px;
  margin-bottom: 20px;
}

.test-title p {
  min-width: 320px;
  margin-top: 18px;
  font-weight: bolder;
}
</style>
