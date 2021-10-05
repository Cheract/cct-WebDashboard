<template>
  <div class="wrapper">
    <div class="nav-wrapper">
      <div class="test-title">
        <p>위더스제약_세악틸정 250밀리그램</p>
      </div>
      <v-tabs>
        <v-tab>대시보드</v-tab>
        <v-tab>검수</v-tab>
        <v-tab>참여자</v-tab>
        <v-tab>설정</v-tab>
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
    return {};
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
