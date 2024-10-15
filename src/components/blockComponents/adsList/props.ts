export type PropType = {
  list: itemType[];
};

export type itemType = {
  title: string;
  description: string;
  price: string;
  location: string;
  date: string;
  isFavorite: boolean;
  imageUrl: string[];
  type: string;
  subType: string;
  properties: any;
};

export type renderType = {
  item: itemType;
  index: number;
};
