<template>
  <div class="activity">
    <div class="tl">
      <div class="icon-wrap" :class="{ new: isAddAction }">
        <img :src="require('../assets/icons/' + icon + '.svg')" :alt="icon" />
      </div>
      <div class="vertical-line"></div>
    </div>
    <div class="text">
      <span class="action" v-html="logMsg"></span>
      <span class="time-past">{{ logDate }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { IActivity } from "@/types";
import { Component, Prop, Vue } from "vue-property-decorator";
import moment from "moment";

@Component({
  name: "Activity",
})
export default class Activity extends Vue {
  @Prop({ default: () => ({}) }) private activity!: IActivity;

  get icon(): string {
    switch (this.activity.action_type) {
      case "Add":
        return "plus";
      case "Request":
        return "user-check";
      case "Join":
        return "user";
      case "Start":
        return "play";
      case "Update":
        return "edit";
      default:
        return "";
    }
  }

  get logMsg(): string {
    return `<b>${this.activity.initiator}</b> ${this.activity.action}`;
  }

  get logDate(): string {
    return moment(this.activity.timestamp).fromNow();
  }

  get isAddAction(): boolean {
    return this.activity.action_type === "Add";
  }
}
</script>

<style scoped>
.activity {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.tl {
  display: flex;
  align-items: center;
  min-height: 65px;
  position: relative;
}

.vertical-line {
  width: 1px;
  background-color: #e5e5e5;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  left: 50%;
}

.icon-wrap {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #e5e5e5;
  z-index: 1;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrap.new {
  background-color: #3795f5;
}

.text {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-left: 20px;
}

.action {
  font-size: 1.1rem;
}

.time-past {
  margin-left: 10px;
  font-size: 0.95rem;
  color: #c7c7c7;
}

img {
  height: auto;
  width: 15px;
}
</style>
