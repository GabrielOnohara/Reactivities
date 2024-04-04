import { makeAutoObservable } from "mobx";
import { Activity } from "../models/activity";
import agent from "../api/agent";

export default class ActivityStore {
  activities: Activity[] = [];
  selectedActivity: Activity | undefined = undefined;
  editMode: boolean = false;
  loading: boolean = false;
  loadingInitial: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadActivities = async () => {
    this.loadingInitial = true;
    try {
      const activities = await agent.Activities.list();
      activities.forEach((activity) => {
        activity.date = activity.date.split("T")[0];
        this.activities.push(activity);
      });
      this, (this.loadingInitial = false);
    } catch (error) {
      console.log(error);
    }
  };
}
