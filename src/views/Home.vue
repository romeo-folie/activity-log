<template>
  <div class="home">
    <h3 class="title">Activity History</h3>
    <ActivityList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ActivityList from "@/components/ActivityList.vue";

@Component({
  components: {
    ActivityList,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  padding: 15px;
}

.title {
  margin-right: auto;
  font-size: 1.4rem;
}
</style>
