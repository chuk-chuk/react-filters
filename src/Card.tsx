import React from "react";
import { CardItem } from "./types";

const Card = ({ items }: { items: CardItem[] }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mx-24 content-center">
        {items.map((item) => {
          return (
            <div
              className="bg-red-100 border-4 border-red-300 my-4 rounded-lg"
              key={item.id}
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-t max-w-50"
              />
              <div className="m-4">
                <div className="text-md font-bold mb-2">
                  {item.title} - {item.price}
                </div>
                <div className="text-xs font-regular">{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
