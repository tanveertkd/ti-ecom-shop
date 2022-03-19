import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Helmet",
    description: "Browse through our collection of helmets!",
    asset: "https://i.ibb.co/xgG23pG/boxing-helmet.png",
  },
  {
    _id: uuid(),
    categoryName: "Gloves",
    description:"Browse through our collection of gloves!",
    asset: "https://i.ibb.co/QDrxpW6/boxing-gloves.png",
  },
  {
    _id: uuid(),
    categoryName: "Training Equipments",
    description: "Browse through our training equipments!",
    asset: "https://i.ibb.co/4mHPTfz/punching-bag.png",
  },
];
