export enum ActionType {
  Add = "Add",
  Request = "Request",
  Join = "Join",
  Start = "Start",
  Update = "Update",
}

export interface IActivity {
  initiator: string;
  action_type: ActionType;
  action: string;
  timestamp: Date;
}
