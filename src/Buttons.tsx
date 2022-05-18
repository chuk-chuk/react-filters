import React from "react";
import mockedData from "./Data";
import { CardItem, CategoryEnum } from "./types";

type ButtonsProps = {
  filterItem: (item: CategoryEnum) => void;
  setItems: (data: CardItem[]) => void;
  categories: CategoryEnum[];
};

const Buttons = ({ filterItem, setItems, categories }: ButtonsProps) => {
  return (
    <>
      <div className="flex justify-center">
        {categories.map((item, id) => {
          return (
            <button
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded w-36 mx-4"
              onClick={() => filterItem(item)}
              key={id}
            >
              {item}
            </button>
          );
        })}
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded w-36"
          onClick={() => setItems(mockedData)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;
