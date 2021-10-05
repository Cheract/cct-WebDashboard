<template>
  <div class="testing">
    {{ items.details.example }}
  </div>
  <!-- <v-data-table
    :items="items"
    hide-default-footer
    hide-default-header
    :show-expand="true"
    no-data-text="데이터가 없습니다."
  ></v-data-table> -->
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.testing {
  height: 80px;
  width: 100%;
  border: 1px solid black;
}
</style>
