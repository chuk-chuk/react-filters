import React, { useState } from "react";
import mockedData from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
import { CardItem, CategoryEnum } from "./types";

const App = () => {
  const [items, setItems] = useState<CardItem[]>(mockedData);

  const menuCategories = [...new Set(mockedData.map((item) => item.category))];

  const filterItem = (curCategory: CategoryEnum) => {
    const newItem = mockedData.filter((item) => {
      return item.category === curCategory;
    });
    setItems(newItem);
  };

  return (
    <>
      <div>
        <h1 className="col-12 text-3xl font-bold text-center my-3 ">
          Our Menu
        </h1>
        <Buttons
          filterItem={filterItem}
          setItems={setItems}
          categories={menuCategories}
        />
        <Card items={items} />
      </div>
    </>
  );
};

export default App;
