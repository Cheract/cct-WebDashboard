<template>
  <div class="detail_container">
    <div class="upper_container">
      <div class="subject_profile">
        <div style="height:180px; width: 180px">
          <p style="font-weight: bolder; font-size: 20px;">
            참여자 사진
          </p>
        </div>
        <img
          src="../../public/whale.svg"
          width="180px"
          height="180px"
          style="border: 1px solid lightgray; margin: 0 0 0 50px;"
        />
      </div>
      <div class="video_wrapper">
        <div
          @click.stop="downloadVideo"
          style="width: 600px; height: 300px; border: 1px solid lightgray; display: flex; justify-content: center; align-items: center; font-size: 24px;"
        >
          클릭으로 투약영상 다운로드 받기
          <img src="../../public/click.gif" width="120px" />
        </div>
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
        <v-btn class="approve-button" @click="confirmDecision('approved')"
          >승인</v-btn
        >
        <v-btn class="disapprove-button" @click.stop="openDialog">거부</v-btn>
      </div>

      <!-- modal / dialog -->
      <v-dialog
        v-model="isDialogOpen"
        transition="dialog-top-transition"
        max-width="600"
      >
        <v-card>
          <v-card-title class="text-h5">
            거부 사유
          </v-card-title>
          <v-card-text>
            <v-select
              dense
              outlined
              v-model="causeOfDisapproval"
              :items="selectOptions"
              placeholder="거부 사유 선택"
              :menu-props="{ offsetY: true }"
              required
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-spacer> </v-spacer>
            <v-btn color="primary" @click.stop="closeDialog">
              확인
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Util from "../Util";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    details: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isDialogOpen: false,
      causeOfDisapproval: "",
      selectOptions: ["다른 약 복약", "동일인이 아님", "미복용"],
    };
  },
  methods: {
    async confirmDecision(param) {
      await axios.put(`http://13.124.68.131:3000/data/${this.id}`, {
        ...this.item,
        status: param,
        causeOfDisapproval: this.causeOfDisapproval,
      });
      window.location.reload(); //force reload after put request
    },
    openDialog() {
      this.causeOfDisapproval = "";
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
      this.confirmDecision("disapproved");
      this.causeOfDisapproval = "";
    },
    async downloadVideo() {
      try {
        const videoUrl = await axios.get("http://13.124.252.101:8081/video");
        const url = videoUrl.data.data.dir;
        console.log(url);
        var link = document.createElement("a");
        link.target = "_blank";
        link.href = Util.makeUrl("http://d3k5eztauewvqi.cloudfront.net", url);
        link.click();
      } catch (e) {
        console.log(e);
      }
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
  width: 110px;
}
</style>
