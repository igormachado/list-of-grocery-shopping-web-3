import {
  Button,
  FormContainer,
  InputItem,
  Quantity,
  SelectCategory,
} from "@/styles/pages/Form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useContext } from "react";
import { ListContext } from "../../context/prodcutsShop";
import { SubmitHandler, useForm } from "react-hook-form";

type ListItemProps = {
  item: string;
  quantity: string;
  category: string;
};

const schema = z.object({
  item: z.string().min(4, { message: "Required" }),
  quantity: z.string().min(1, { message: "Required" }),
  category: z.string().min(4, { message: "Required" }),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ListItemProps>({ resolver: zodResolver(schema) });

  const { listItems, setListItems } = useContext(ListContext);

  const onSubmit: SubmitHandler<ListItemProps> = ({
    item,
    quantity,
    category,
  }: ListItemProps) => {
    setListItems([...listItems, { item, quantity, category }]);
    reset();
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <InputItem>
          <span>Item</span>
          <input type="text" placeholder="Add Item" {...register("item")} />
          {errors.item?.message && <p>{errors.item?.message}</p>}
        </InputItem>
        <Quantity>
          <span>Quantity</span>
          <input type="text" {...register("quantity")} />
          {errors.quantity?.message && <p>{errors.quantity?.message}</p>}
        </Quantity>
        <SelectCategory>
          <label htmlFor="category">Category</label>
          <select defaultValue="" {...register("category")}>
            <option>Category option</option>
            <option value="Fruit">Fruit</option>
            <option value="Bakary">Bakary</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Drink">Drink</option>
            <option value="Meet">Meet</option>
          </select>
          {errors.category?.message && <p>{errors.category?.message}</p>}
        </SelectCategory>
        <Button>
          <span>+</span>
        </Button>
      </FormContainer>
    </>
  );
}
