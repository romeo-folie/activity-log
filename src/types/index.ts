type ActionType = "Add" | "Request" | "Join" | "Start" | "Update";

export interface IActivity {
  id: number;
  initiator: string;
  action_type: ActionType;
  action: string;
  timestamp: Date;
  requested_user?: string;
  role?: string;
}
