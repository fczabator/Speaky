export type StartedChatParent = {
  date: Date;
  userId: string;
  wordIds: string[];
};

export type ChatParent = {
  _id: string;
  name: string;
  wordIds: string[];
  topicIds?: string[];
  inviteCode: string;
  completedWordIds: string[];
  isCompleted?: boolean;
  started: StartedChatParent[];
  userIds: string[];
};
