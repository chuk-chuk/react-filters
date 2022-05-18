export enum CategoryEnum {
  All = "All",
  Breakfast = "Breakfast",
  Lunch = "Lunch",
  Dinner = "Dinner",
  Snack = "Snack",
}
export interface CardItem {
  id: string;
  title: string;
  category: CategoryEnum;
  price: string;
  img: string;
  desc: string;
}
