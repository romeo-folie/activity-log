<template>
  <div class="activity">
    <div class="tl">
      <div class="icon-wrap" :class="{ new: addAction }">
        <img :src="require('../assets/icons/' + icon)" alt="icon" />
      </div>
      <div class="vertical-line"></div>
    </div>
    <div class="text">
      <span class="action">Abigail Owusu added lead</span>
      <span class="time-past">14 days ago</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Activity",
})
export default class Activity extends Vue {
  private iconSrc = "user-check.svg";

  // write a switch case in here and use the action to determine which action is displayed
  get icon(): string {
    return this.iconSrc;
  }

  // another switch here to generate the right message using all the info from model based on action
  get logMsg(): string {
    return "";
  }

  // getter for whether or not action is an addition
  get addAction(): boolean {
    return false;
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
