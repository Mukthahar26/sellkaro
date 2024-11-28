export type AdItemProps = {
  ADId: string;
  title: string;
  description: string;
  type: string;
  subType: string;
  price: string;
  date: string;
  location: string;
  isFavorite: boolean;
  imageUrl: string[];
  properties: propertiesType[];
};

export type propertiesType = {
  label: string;
  value: string;
};

export type InAppNotificationProps = {
  imageUrl: string;
  title: string;
  date: string;
  userName: string;
  reportText?: string;
  type: 'FAVORITES' | 'REPORT';
};
