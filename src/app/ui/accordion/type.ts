export type AccordionItemType = {
  key: string;
  id: string;
  title: string;
  description: string;
  current: boolean;
  toggleItem: () => void;
};

export type AccordionDataType = {
  id: string;
  title: string;
  description: string;
};
