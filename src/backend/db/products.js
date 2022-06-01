import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Helmet",
    price: 1999,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024868/ti_ecom/boxing-helmet_sxkfpw.png",
    category: "protective_eq",
    rating: 4,
    discount: 10
  },
  {
    _id: uuid(),
    title: "Kendo Helmet - Bogu",
    price: 2599,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024485/ti_ecom/kendo_1_yglunc.png",
    category: "protective_eq",
    rating: 4,
    discount: 10
  },
  {
    _id: uuid(),
    title: "Teeth protector",
    price: 299,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024485/ti_ecom/gum-shield_p8qlqe.png",
    category: "protective_eq",
    rating: 4,
    discount: 10
  },
  {
    _id: uuid(),
    title: "Gloves-10Oz",
    price: 2199,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024868/ti_ecom/boxing-gloves_wtvoma.png",
    category: "protective_eq",
    rating: 2,
    discount: 10
  },
  {
    _id: uuid(),
    title: "Gloves-12Oz",
    price: 1199,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024868/ti_ecom/boxing-gloves_wtvoma.png",
    category: "protective_eq",
    rating: 4,
    discount: 12
  },
  {
    _id: uuid(),
    title: "Gloves-14oz",
    price: 1199,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024868/ti_ecom/boxing-gloves_wtvoma.png",
    category: "protective_eq",
    rating: 3.5,
    discount: 10
  },
  {
    _id: uuid(),
    title: "Gloves-18Oz",
    price: 1199,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024868/ti_ecom/boxing-gloves_wtvoma.png",
    category: "protective_eq",
    rating: 4,
    discount: 10
  },
  {
    _id: uuid(),
    title: "Gloves-Pro MMA",
    price: 1299,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024484/ti_ecom/karate_uxykjs.png",
    category: "protective_eq",
    rating: 5,
    discount: 10
  },
  {
    _id: uuid(),
    title: "Gloves-Pro Boxing",
    price: 2599,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024484/ti_ecom/gloves_k0qxnv.png",
    category: "protective_eq",
    rating: 5,
    discount: 10
  },
  {
    _id: uuid(),
    title: "Shin Guards",
    price: 1099,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024868/ti_ecom/shin-guards_c8313h.png",
    category: "protective_eq",
    rating: 3,
    discount: 5
  },
  {
    _id: uuid(),
    title: "Shin Guards - Heavy",
    price: 1499,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024485/ti_ecom/shin-guards_tnvcnf.png",
    category: "protective_eq",
    rating: 3,
    discount: 5
  },
  {
    _id: uuid(),
    title: "Training Shorts",
    price: 999,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024868/ti_ecom/boxing-shorts_bsv5zh.png",
    category: "apparel",
    rating: 4,
    discount: 5
  },
  {
    _id: uuid(),
    title: "Punching Bag",
    price: 4999,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024868/ti_ecom/punching-bag_n9u7cz.png",
    category: "training_eq",
    rating: 4,
    discount: 15
  },
  {
    _id: uuid(),
    title: "Punching Bag - Heavy",
    price: 4999,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024484/ti_ecom/punching-bag_gilhtx.png",
    category: "training_eq",
    rating: 5,
    discount: 15
  },
  {
    _id: uuid(),
    title: "Punching Ball",
    price: 2599,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024868/ti_ecom/punching-ball_xruo5c.png",
    category: "training_eq",
    rating: 3.5,
    discount: 10
  },
  {
    _id: uuid(),
    title: "Skip Rope",
    price: 399,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024868/ti_ecom/skip-rope_sfwe4k.png",
    category: "training_eq",
    rating: 2,
    discount: 5
  },
  {
    _id: uuid(),
    title: "Skip Rope - Sleek",
    price: 499,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024485/ti_ecom/skip-rope_ennqak.png",
    category: "training_eq",
    rating: 4,
    discount: 5
  },
  {
    _id: uuid(),
    title: "Training Dummy",
    price: 4999,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024868/ti_ecom/mannequin_ljwblk.png",
    category: "training_eq",
    rating: 5,
    discount: 15
  },
  {
    _id: uuid(),
    title: "Chest Guard",
    price: 4999,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024485/ti_ecom/kendo_pgooiu.png",
    category: "protective_eq",
    rating: 3,
    discount: 15
  },
  {
    _id: uuid(),
    title: "Training Ring - Multi-discipline",
    price: 4999,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024484/ti_ecom/boxing-ring_gw0v5a.png",
    category: "training_eq",
    rating: 4,
    discount: 2
  },
  {
    _id: uuid(),
    title: "Nunchaks",
    price: 2999,
    asset: "https://res.cloudinary.com/ddroedz3j/image/upload/v1654024485/ti_ecom/nunchaku_zhslha.png",
    category: "training_eq",
    rating: 2,
    discount: 12
  },
];
