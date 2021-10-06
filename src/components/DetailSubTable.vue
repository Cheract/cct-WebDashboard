<template>
  <div class="detail_container">
    <div class="upper_container">
      <div class="subject_profile">
        <div style="height:180px; width: 180px">
          <p style="font-weight: bolder; font-size: 20px;">
            참여자 사진
          </p>
        </div>
        <div style="height: 180px; width: 180px; border: 1px solid black"></div>
      </div>
      <div class="video_wrapper">
        <div
          style="width: 600px; height: 300px; border: 1px solid black;"
        ></div>
      </div>
    </div>
    <div class="lower_container">
      <div class="lower_1">
        <div class="info-container">
          <p style="font-weight: bolder; font-size: 20px;">참여자 정보</p>
          <div class="info-pair-wrapper">
            <p class="sub-title">R넘버</p>
            <p class="sub-info">
              {{ details.subject_detail.registration_number }}
            </p>
          </div>
          <div class="info-pair-wrapper">
            <p class="sub-title">남은 투약 횟수</p>
            <p class="sub-info">
              {{ details.subject_detail.remaining_intake_count }}회
            </p>
          </div>
        </div>
      </div>
      <div class="lower_2">
        <div class="info-container">
          <div class="info-pair-wrapper">
            <p class="sub-title">약 종류 확인</p>
            <p
              class="sub-info"
              :style="
                details.subject_detail.pill_verification === '검토필요'
                  ? 'color: red'
                  : ''
              "
            >
              {{ details.subject_detail.pill_verification }}
            </p>
          </div>
          <div class="info-pair-wrapper">
            <p class="sub-title">신분 확인</p>
            <p
              class="sub-info"
              :style="
                details.subject_detail.subject_verification === '검토필요'
                  ? 'color: red'
                  : ''
              "
            >
              {{ details.subject_detail.subject_verification }}
            </p>
          </div>
          <div class="info-pair-wrapper">
            <p class="sub-title">투약 확인</p>
            <p
              class="sub-info"
              :style="
                details.subject_detail.intake_verification === '검토필요'
                  ? 'color: red'
                  : ''
              "
            >
              {{ details.subject_detail.intake_verification }}
            </p>
          </div>
          <div class="info-pair-wrapper">
            <p class="sub-title">입벌림 확인</p>
            <p
              class="sub-info"
              :style="
                details.subject_detail.subject_mouth_verification === '검토필요'
                  ? 'color: red'
                  : ''
              "
            >
              {{ details.subject_detail.subject_mouth_verification }}
            </p>
          </div>
        </div>
      </div>
      <div class="lower_3">
        <v-btn class="approve-button">승인</v-btn>
        <v-btn class="disapprove-button">거부</v-btn>
      </div>
    </div>
    <!-- {{ details.subject_face }}
    {{ details.video_url }} -->
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.detail_container {
  height: 100% !important;
  width: 100% !important;
  display: flex;
  flex-direction: column;
}
.upper_container {
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lower_container {
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.subject_profile {
  width: 50%;
  height: 100%;
  padding: 50px;
  display: flex;
  justify-content: flex-start;
}
.video_wrapper {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lower_1,
.lower_2,
.lower_3 {
  text-align: start;
  width: 25%;
  display: flex;
}
.lower_3 {
  height: 55%;
  flex-direction: column;
  justify-content: space-around;
}

.approve-button {
  height: 80px !important;
  color: #373eff !important;
  border: 1px solid #373eff;
  background: #ebecff !important;
}

.disapprove-button {
  height: 80px !important;
  color: #f53c3c !important;
  border: 1px solid #f53c3c;
  background: #ffebeb !important;
}

.info-container {
  height: 185px;
  width: 280px;
}

.info-pair-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sub-title {
  font-size: 20px;
  color: #868686;
  font-weight: 700;
}

.sub-info {
  font-size: 18px;
  font-weight: 500;
  width: 80px;
}
</style>
