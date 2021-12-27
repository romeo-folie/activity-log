<template>
  <div class="activities">
    <Activity />
    <Activity />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Activity from "@/components/Activity.vue";

@Component({
  name: "ActivityList",
  components: {
    Activity,
  },
})
export default class ActivityList extends Vue {
  @Prop({ default: () => [] }) private activities!: Array<unknown>;
}
</script>

<style scoped>
.activities {
  margin-left: 15px;
}
</style>
