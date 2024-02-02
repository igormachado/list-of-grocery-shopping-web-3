import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface ListItemProps {
  item: string;
  quantity: string;
  category: string;
}

interface ListProductProps {
  children: ReactNode;
}

interface ListContextShopProps {
  listItems: ListItemProps[];
  setListItems: Dispatch<SetStateAction<ListItemProps[]>>;
}

export const ListContext = createContext({} as ListContextShopProps);

export function ListContextProvider({ children }: ListProductProps) {
  const [listItems, setListItems] = useState<ListItemProps[]>([]);
  console.log(listItems.length);

  return (
    <ListContext.Provider value={{ listItems, setListItems }}>
      {children}
    </ListContext.Provider>
  );
}
