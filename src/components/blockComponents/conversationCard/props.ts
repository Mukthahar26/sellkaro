export type conversationListProps = {
  item: conversationItem;
  onSelectedItem: (item: any) => void;
};

export type conversationItem = {
  id: string;
  message: string;
  subject: string;
  imageUrl: string | null;
  title: string;
  date: string;
  isRead: boolean;
};
