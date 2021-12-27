<template>
  <div class="activities">
    <Activity
      v-for="activity in sortedActivities"
      :activity="activity"
      :key="activity.id"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import Activity from "@/components/Activity.vue";
import {IActivity} from "@/types";

@Component({
  name: "ActivityList",
  components: {
    Activity,
  },
})
export default class ActivityList extends Vue {
  //initial activity data here
  activities: Array<IActivity> = [
    {
      id: 1,
      initiator: "John Doe",
      action_type: "Add",
      action: "added lead",
      timestamp: this.randomDate(),
    },
    {
      id: 2,
      initiator: "Abigail Owusu Ansah",
      action_type: "Join",
      action: "joined mission as Mission Executive",
      timestamp: this.randomDate(),
      role: "Mission Executive",
    },
    {
      id: 3,
      initiator: "Josephine Ampah",
      action_type: "Start",
      action: "started scope development",
      timestamp: this.randomDate(),
    },
    {
      id: 4,
      initiator: "Jane Doe",
      action_type: "Request",
      action: "requested Laud Inkoom to join mission as Mission Executive",
      timestamp: this.randomDate(),
      requested_user: "Laud Inkoom",
      role: "Mission Executive",
    },
    {
      id: 5,
      initiator: "Rasheeda Seshie",
      action_type: "Update",
      action: "updated mission scope",
      timestamp: this.randomDate(),
    },
  ];

  mounted(): void {
    if (window.sessionStorage.getItem("activities")) {
      this.activities = JSON.parse(
        window.sessionStorage.getItem("activities") as string
      );
    }
  }

  // get all activities
  all(): Array<IActivity> {
    return this.activities;
  }

  // get single activity by id
  get(id: number): IActivity | undefined {
    return this.activities.find((act) => act.id === id);
  }

  // add new activity to list of activities
  add(activity: IActivity): void {
    const last = this.activities.pop();
    const newAct = {...activity, id: last ? last.id + 1 : 1};
    this.activities.push(newAct);
  }

  randomDate(start = new Date(2021, 11, 1), end = new Date()): Date {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  get sortedActivities(): Array<IActivity> {
    return this.activities.sort(
      (a: IActivity, b: IActivity) =>
        +new Date(a.timestamp) - +new Date(b.timestamp)
    );
  }

  @Watch("activities", {deep: true})
  onActivityChange(): void {
    window.sessionStorage.setItem(
      "activities",
      JSON.stringify(this.activities)
    );
  }
}
</script>

<style scoped>
.activities {
  margin-left: 15px;
}
</style>
