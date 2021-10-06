<template>
  <div>
    <div class="title-search-section">
      <div class="titles">
        <div class="option-title">
          검수 수행
          <span>({{ data.length }})</span>
        </div>
        <div class="option-title">
          검수 결과
          <span>{{ "(7)" }}</span>
        </div>
      </div>
      <div class="search">
        <v-select class="type-select" outlined dense></v-select>
        <v-text-field
          class="search-input"
          dense
          outlined
          clearable
          width="80px"
          append-icon="mdi-magnify"
        />
      </div>
    </div>
    <div class="table-wrapper">
      <v-data-table
        class="examine-table"
        :items="data"
        item-key="id"
        single-expand
        dense
        :expanded.sync="expanded"
        :headers="tableHeaders"
        show-expand
        no-data-text="데이터가 없습니다."
      >
        <template v-slot:item.submitted_date="{ item }">
          <div>{{ item.submitted_date }}</div>
        </template>
        <template v-slot:item.name="{ item }">
          <div>{{ item.name }}</div>
        </template>
        <template v-slot:item.year_of_birth="{ item }">
          <div>{{ item.year_of_birth }}</div>
        </template>
        <template v-slot:item.video_length="{ item }">
          <div>{{ item.video_length }}</div>
        </template>
        <template v-slot:item.accuracy="{ item }">
          <span
            v-if="item.accuracy === 'High'"
            style="color: #1CD1A6; font-weight: bold"
          >
            {{ item.accuracy }}
          </span>
          <span v-else style="color: #F53C3C; font-weight: bold">{{
            item.accuracy
          }}</span>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length" class="subtable-container">
            <detail-sub-table :details="item.details"></detail-sub-table>
          </td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import mockData from "./examineData";
import DetailSubTable from "./DetailSubTable.vue";
export default {
  components: {
    DetailSubTable,
  },
  data() {
    return {
      selectedTab: "pending",
      data: mockData,
      expanded: [],
      tableHeaders: [
        {
          text: "복약일시",
          value: "submitted_date",
          align: "center",
          sortable: true,
          width: "20%",
        },
        {
          text: "성명",
          value: "name",
          align: "center",
          sortable: true,
          width: "15%",
        },
        {
          text: "생년월일",
          value: "year_of_birth",
          align: "center",
          sortable: false,
          width: "20%",
        },
        // {
        //   text: "시험명",
        //   value: "test_name",
        //   align: "center",
        //   sortable: false,
        //   width: "15%",
        // },
        {
          text: "영상길이",
          value: "video_length",
          align: "center",
          sortable: false,
          width: "15%",
        },
        {
          text: "정확도",
          value: "accuracy",
          align: "center",
          sortable: true,
          width: "15%",
        },
        {
          text: "상세보기",
          value: "data-table-expand",
          align: "center",
          sortable: false,
          width: "15%",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.title-search-section {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 40px;
}

.titles {
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 24px;
}

.option-title {
  font-size: 32px;
  font-weight: 700;
}

.search {
  display: flex;
  width: 400px;
  justify-content: space-between;
}

.type-select {
  max-width: 160px;
}

.search-input {
  max-width: 200px;
}

.table-wrapper {
  padding: 20px 40px;
  height: 80vh;
}

.type-select >>> .v-input__slot {
  background-color: white !important;
}

.search-input >>> .v-input__slot {
  background-color: white !important;
}

.examine-table {
  border: 1px solid #d7dae2;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.subtable-container {
  height: 760px !important;
}
</style>

<style>
.examine-table > .v-data-table__wrapper {
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
  overflow: auto;
}

tr {
  height: 80px !important;
}

.examine-table > .v-data-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.12) !important;
  position: absolute !important;
  bottom: 0px !important;
  right: 0px !important;
  width: 100%;
  background-color: white !important;
}
</style>
