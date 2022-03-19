import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Helmet",
    price: "1999",
    asset: "https://i.ibb.co/xgG23pG/boxing-helmet.png",
    category: "protective_eq",
    rating: 4
  },
  {
    _id: uuid(),
    title: "Gloves-10Oz",
    price: "1199",
    asset: "https://i.ibb.co/QDrxpW6/boxing-gloves.png",
    category: "protective_eq",
    rating: 3
  },
  {
    _id: uuid(),
    title: "Gloves-12Oz",
    price: "1199",
    asset: "https://i.ibb.co/QDrxpW6/boxing-gloves.png",
    category: "protective_eq",
    rating: 4
  },
  {
    _id: uuid(),
    title: "Gloves-14oz",
    price: "1199",
    asset: "https://i.ibb.co/QDrxpW6/boxing-gloves.png",
    category: "protective_eq",
    rating: 3.5
  },
  {
    _id: uuid(),
    title: "Gloves-18Oz",
    price: "1199",
    asset: "https://i.ibb.co/QDrxpW6/boxing-gloves.png",
    category: "protective_eq",
    rating: 4
  },
  {
    _id: uuid(),
    title: "Shin Guards",
    price: "1099",
    asset: "https://i.ibb.co/jy9L62n/shin-guards.png",
    category: "protective_eq",
    rating: 3
  },
  {
    _id: uuid(),
    title: "Training Shorts",
    price: "999",
    asset: "https://i.ibb.co/prw2Z7y/boxing-shorts.png",
    category: "apparel",
    rating: 4
  },
  {
    _id: uuid(),
    title: "Punching Bag",
    price: "4999",
    asset: "https://i.ibb.co/4mHPTfz/punching-bag.png",
    category: "training_eq",
    rating: 4
  },
  {
    _id: uuid(),
    title: "Punching Ball",
    price: "2599",
    asset: "https://i.ibb.co/J5XXhbd/punching-ball.png",
    category: "training_eq",
    rating: 3.5
  },
  {
    _id: uuid(),
    title: "Skip Rope",
    price: "399",
    asset: "https://i.ibb.co/N7zfXYz/skip-rope.png",
    category: "training_eq",
    rating: 2
  },
  {
    _id: uuid(),
    title: "Training Dummy",
    price: "4999",
    asset: "https://i.ibb.co/Q9S2cq9/mannequin.png",
    category: "training_eq",
    rating: 5
  },
];
