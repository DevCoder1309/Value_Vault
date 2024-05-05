import mongoose from "mongoose";
import Product from './products.js';

mongoose
  .connect("mongodb://127.0.0.1:27017/value_vault")
  .then(() => console.log("MONGODB CONNECTED"))
  .catch(() => console.log("ERROR"));


const products = [
    {
      name: "Basmati Rice",
      description: "India Gate Basmati Rice - 5kg",
      price_amazon: 349,
      price_flipkart: 335,
      price_bigbasket: 320,
      image:
        "https://www.bigbasket.com/media/uploads/p/l/255843_18-daawat-super-basmati-5-kg.jpg",
      product_url_a:
        "https://www.amazon.in/Daawat-Rozana-Super-Basmati-Rice/dp/B075754F89",
      product_url_f:
        "https://www.flipkart.com/daawat-rozana-super-basmati-rice-medium-grain/p/itm896102b1273b2",
      product_url_b:
        "https://www.bigbasket.com/pd/255843/daawat-super-basmati-5-kg-5-kg-pouch/",
    },
    {
      name: "Sugar",
      description: "Dhaawat No. 1 White Refined Sugar - 1kg",
      price_amazon: 42,
      price_flipkart: 242,
      price_bigbasket: 40,
      image:
        "https://www.bigbasket.com/media/uploads/p/m/40253563_1-madhur-sugar-pure-hygienic-fine-grain-natural-sulphur-free.jpg?tr=w-1920,q=80",
      product_url_a:
        "https://www.amazon.in/FORTUNE-Fortune-Sugar-1-kg/dp/B08WZQ1SN3",
      product_url_f:
        "https://www.flipkart.com/pro-organic-life-dhaga-mishri-1kg-sugar/p/itma21823b6786b8",
      product_url_b:
        "https://www.bigbasket.com/ps/?q=sugahttps://www.bigbasket.com/pd/40253563/madhur-sugar-pure-hygienic-fine-grain-natural-sulphur-free-1-kg/",
    },
    {
      name: "Salt",
      description: "Tata Salt Lite Iodized Salt - 1kg",
      price_amazon: 28,
      price_flipkart: 30,
      price_bigbasket: 25,
      image: "https://m.media-amazon.com/images/I/61-zRoFrfqL._AC_UL320_.jpg",
      product_url_a: "https://www.amazon.in/Tata-Salt-1kg/dp/B07575FPC3/",
      product_url_f:
        "https://www.flipkart.com/tata-salt-immuno-goodness-zinc-iodine-helps-support-immunity-iodized/p/itmc9c4727933252",
      product_url_b:
        "https://www.bigbasket.com/pd/241600/tata-salt-iodized-1-kg-pouch/",
    },
    {
      name: "Green Tea",
      description: "Lipton Green Tea - 100 Bags",
      price_amazon: 475,
      price_flipkart: 272,
      price_bigbasket: 325,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/tea/t/t/x/-original-imagmaqzepyyhszr.jpeg?q=70",
      product_url_a:
        "https://www.amazon.in/Lipton-Honey-Lemon-Green-Pieces/dp/B01HMQ4HLW/",
      product_url_f:
        "https://www.flipkart.com/lipton-lemon-honey-green-tea-bags-box/p/itm2d8e2239ccfb0",
      product_url_b:
        "https://www.bigbasket.com/pd/40077764/lipton-honey-lemon-green-tea-140-g/",
    },
  {
    name: "Musturd oil",
    description: "Forturne Kacchi Ghani Musturd Oil - 1L",
    price_amazon: 143,
    price_flipkart: 149,
    price_bigbasket: 126,
    image:
      "https://www.bigbasket.com/media/uploads/p/m/276756_9-fortune-fortune-premium-kachi-ghani-pure-mustard-oil.jpg?tr=w-1920,q=80",
    product_url_a:
      "https://www.amazon.in/Fortune-Kachi-Ghani-Pure-Mustard/dp/B0757631XR",
    product_url_f:
      "https://www.flipkart.com/fortune-premium-kachi-ghani-pure-mustard-oil-pet-bottle/p/itm0af4b553d6f2c",
    product_url_b:
      "https://www.bigbasket.com/pd/276756/fortune-fortune-premium-kachi-ghani-pure-mustard-oil-1l-pet-bottle/",
  },
  {
    name: "Musturd oil",
    description: "Forturne Kacchi Ghani Musturd Oil - 200ml",
    price_amazon: 38,
    price_flipkart: 40,
    price_bigbasket: 32,
    image:
      "https://www.bigbasket.com/media/uploads/p/m/276756_9-fortune-fortune-premium-kachi-ghani-pure-mustard-oil.jpg?tr=w-1920,q=80",
    product_url_a:
      "https://www.amazon.in/Fortune-Kachi-Ghani-Mustard-500ml/dp/B01ABRU2JA/",
    product_url_f:
      "https://www.flipkart.com/ganesh-200ml-mustard-oil-plastic-bottle/p/itmca1ce3b18da90",
    product_url_b:
      "https://www.bigbasket.com/pd/40310075/fortune-premium-kachi-ghani-pure-mustard-oil-200-ml-pet-bottle/",
  },
  {
    name: "Musturd oil",
    description: "Forturne Kacchi Ghani Musturd Oil - 500ml",
    price_amazon: 89,
    price_flipkart: 92,
    price_bigbasket: 75,
    image:
      "https://www.bigbasket.com/media/uploads/p/m/276756_9-fortune-fortune-premium-kachi-ghani-pure-mustard-oil.jpg?tr=w-1920,q=80",
    product_url_a:
      "https://www.amazon.in/Fortune-Kachi-Ghani-Mustard-500ml/dp/B01ABRU2JA/",
    product_url_f:
      "https://www.flipkart.com/kriti-refined-mustard-oil-500-ml-bottle-plastic/p/itmaa4b7d844dc3c",
    product_url_b:
      "https://www.bigbasket.com/pd/40310075/fortune-premium-kachi-ghani-pure-mustard-oil-500-ml-pet-bottle/",
  },
  {
    "name": "Wheat Flour",
    "description": "Aashirvaad Whole Wheat Atta - 5kg",
    "price_amazon": 280,
    "price_flipkart": 300 ,
    "price_bigbasket": 299,
    "image": "https://www.bigbasket.com/media/uploads/p/l/126903_10-aashirvaad-atta-whole-wheat.jpg",
    "product_url_a": "https://www.amazon.in/Natures-Superfoods-Aashirvaad-Organic-Atta/dp/B08HK2V1YD/",
    "product_url_f": "https://www.flipkart.com/aashirvaad-whole-wheat-atta/p/itm97c5668e6be58",
    "product_url_b": "https://www.bigbasket.com/pd/126903/aashirvaad-atta-whole-wheat-5-kg-pouch/?nc=as"
  },
  {
    "name": "Aashirvaad Whole Wheat Atta - 1kg",
    "description": "Aashirvaad Whole Wheat Atta - 1kg",
    "price_amazon": 70,
    "price_flipkart": 75,
    "price_bigbasket": 68,
    "image": "https://www.bigbasket.com/media/uploads/p/l/30006887_8-aashirvaad-atta-whole-wheat.jpg",
    "product_url_a": "https://www.amazon.in/Aashirvaad-Superior-MP-Atta-1kg/dp/B006FGJ30G",
    "product_url_f": "https://www.flipkart.com/aashirvaad-whole-wheat-atta/p/itmbfa7796c2cf54",
    "product_url_b": "https://www.bigbasket.com/pd/40202315/aashirvaad-natures-super-foods-organic-atta-1-kg/?nc=as"
  },
  {
    "name": "Pillsbury Chakki Fresh Atta - 5kg",
    "description": "Pillsbury Chakki Fresh Atta - 5kg",
    "price_amazon": 204,
    "price_flipkart": 230,
    "price_bigbasket": 273.59,
    "image": "https://www.bigbasket.com/media/uploads/p/l/124656_3-pillsbury-atta-chakki-fresh.jpg",
    "product_url_a": "https://www.amazon.in/Pillsbury-Chakki-Fresh-Atta-5kg/dp/B08B4LY7ZH",
    "product_url_f": "https://www.flipkart.com/pillsbury-chakki-fresh-atta/p/itm3011230843818",
    "product_url_b": "https://www.amazon.in/Pillsbury-Chakki-Fresh-Atta-5kg/dp/B00AK8J4QS"
  },
  {
    "name": "Milk",
    "description": "Amul Taaza Toned Milk - 1L",
    "price_amazon": 74,
    "price_flipkart": 60,
    "price_bigbasket": 74,
    "image": "https://www.bigbasket.com/media/uploads/p/l/306926_4-amul-homogenised-toned-milk.jpg",
    "product_url_a": "https://www.amazon.in/Amul-Taaza-Homogenised-Toned-Unique/dp/B0CQSY44NS",
    "product_url_f": "https://www.flipkart.com/amul-taaza-homogenised-toned-milk/p/itm432f3dd7d77c2",
    "product_url_b": "https://www.bigbasket.com/pd/306926/amul-homogenised-toned-milk-1-l-carton/?nc=cl-prod-list&t_pos_sec=1&t_pos_item=1&t_s=Taaza+Homogenised+Toned+Milk"
  },
  {
    "name": "Amul Taaza Toned Milk - 500ml",
    "description": "Amul Taaza Toned Milk - 500ml",
    "price_amazon": 38,
    "price_flipkart": 40,
    "price_bigbasket": 38,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40041431_1-amul-taaza-fresh-toned-milk.jpg",
    "product_url_a": "https://www.amazon.in/Amul-Milk-Toned-500ml/dp/B018VFFZSC",
    "product_url_f": "https://www.flipkart.com/amul-taaza-toned-milk/p/itmfgngxxgn8ddfy",
    "product_url_b": "https://www.bigbasket.com/pd/40041431/amul-taaza-fresh-toned-milk-500-ml-carton/?nc=cl-prod-list&t_pos_sec=1&t_pos_item=1&t_s=Taaza+Homogenised+Toned+Milk"
  },
  {
    "name": "Amul Gold Full Cream Milk - 1L",
    "description": "Amul Gold Full Cream Milk - 1L",
    "price_amazon": 78,
    "price_flipkart": 68,
    "price_bigbasket": 80,
    "image": "https://www.bigbasket.com/media/uploads/p/l/104707_8-amul-homogenised-standardised-milk.jpg",
    "product_url_a": "https://www.amazon.in/Amul-Gold-Milk-Homogenised-Standardised/dp/B00TX90K72/",
    "product_url_f": "https://www.flipkart.com/amul-homogenised-milk/p/itm3d0e44399549a",
    "product_url_b": "https://www.bigbasket.com/pd/104707/amul-homogenised-standardised-milk-1-l-carton/?nc=cl-prod-list&t_pos_sec=1&t_pos_item=2&t_s=Gold+Homogenised+Standardised+Milk"
  },
  {
    "name": "Tomato Ketchup",
    "description": "Kissan Fresh Tomato Ketchup - 1kg",
    "price_amazon": 105,
    "price_flipkart": 110,
    "price_bigbasket": 120,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40226027_5-kissan-fresh-tomato-ketchup-tasty-yummy-healthy.jpg",
    "product_url_a": "https://www.amazon.in/Kissan-Fresh-Tomato-Ketchup-Pouch/dp/B09C3STJ24/",
    "product_url_f": "https://www.flipkart.com/kissan-tomato-ketchup/p/itm9a36ca1652749",
    "product_url_b": "https://www.bigbasket.com/pd/40226027/kissan-fresh-tomato-ketchup-tasty-yummy-healthy-12-kg-pouch/?nc=cl-prod-list&t_pos_sec=1&t_pos_item=2&t_s=Fresh+Tomato+Ketchup+-+Tasty%252C+Yummy+%2526+Healthy"
  },
  {
    "name": "Eggs",
    "description": "Farm Fresh Eggs - Pack of 6",
    "price_amazon": 40,
    "price_flipkart": 54,
    "price_bigbasket": 46,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281204_9-fresho-farm-eggs-regular-medium-antibiotic-residue-free.jpg",
    "product_url_a": "https://www.amazon.in/Prabhat-Fresh-Eggs-Pack-6/dp/B07T24WGK9",
    "product_url_f": "https://www.flipkart.com/best-plus-hen-white-eggs/p/itmf5ygfhpn66svj",
    "product_url_b": "https://www.bigbasket.com/pd/281204/fresho-farm-eggs-regular-medium-antibiotic-residue-free-6-pcs/?nc=cl-prod-list&t_pos_sec=1&t_pos_item=2&t_s=Eggs+-+Regular"
  },
  {
    "name": "Maggi 2-Minute Noodles - Masala, 560g ",
    "description": "Maggi 2-Minute Noodles - Masala, 560g ",
    "price_amazon": 112,
    "price_flipkart": 220,
    "price_bigbasket": 158,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40125873_11-maggi-2-minute-noodles-masala.jpg",
    "product_url_a": "https://www.amazon.in/2-minute-Instant-Goodness-Choicest-Favourite/dp/B00U7GDTGO",
    "product_url_f": "https://www.flipkart.com/maggi-2-minute-instant-noodles-masala-560g-noodles-1pkt-vegetarian/p/itma523c6fbc1b70",
    "product_url_b": "https://www.bigbasket.com/pd/266109/maggi-2-minute-instant-noodles-masala-560-g-pouch//"
  },
  {
    "name": "Maggi Atta Masala Noodles - 435g",
    "description": "Maggi Atta Masala Noodles - 435g",
    "price_amazon": 146,
    "price_flipkart": 250,
    "price_bigbasket": 150,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40183056_7-maggi-nutri-licious-veg-atta-masala-noodles.jpg",
    "product_url_a": "https://www.amazon.in/Maggi-Nutri-Licious-Atta-Masala-Noodles/dp/B07WRQ77X4/",
    "product_url_f": "https://www.flipkart.com/maggi-nutri-licious-veg-atta-masala-noodles-435-g-instant-noodles-vegetarian/p/itm5d4946c77b974?",
    "product_url_b": "https://www.bigbasket.com/pd/40183056/maggi-nutri-licious-veg-atta-masala-noodles-435-g/?nc=cl-prod-list&t_pos_sec=1&t_pos_item=1&t_s=Nutri-Licious+Masala+Veg+Atta+Noodles"
  },
  {
    "name": "Bru Instant Coffee - 100g",
    "description": "Bru Instant Coffee 100g",
    "price_amazon": 299,
    "price_flipkart": 310,
    "price_bigbasket": 223,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266531_22-bru-instant-coffee.jpg",
    "product_url_a": "https://www.amazon.in/Big-Bazaar-Combo-Instant-Coffee/dp/B07194TBQG",
    "product_url_f": "https://www.flipkart.com/bru-instant-coffee-100g-50-g-2-coffee/p/itmb030342e67b7d?pid",
    "product_url_b": "https://www.bigbasket.com/pd/266531/bru-instant-coffee-100-g/?nc=cl-prod-list&t_pos_sec=1&t_pos_item=2&t_s=Instant+Coffee"
  },
  {
    "name": "Nescafe Instant Coffee - 200g",
    "description": "Nescafe Instant Coffee 200g",
    "price_amazon": 600,
    "price_flipkart": 633,
    "price_bigbasket": 710,
    "image": "https://www.bigbasket.com/media/uploads/p/l/249581_7-nescafe-classic-100-pure-instant-coffee.jpg",
    "product_url_a": "https://www.amazon.in/Nescaf%C3%A9-Classic-Coffee-200g-Stabilo/dp/B00VJZ0OCY/",
    "product_url_f": "https://www.flipkart.com/nescafe-classic-instant-coffee/p/itmfdf610f00da59",
    "product_url_b": "https://www.bigbasket.com/pd/249581/nescafe-classic-100-pure-instant-coffee-200-g-stabilo/?nc=cl-prod-list&t_pos_sec=1&t_pos_item=1&t_s=Classic+100%2525+Pure+Instant+Coffee"
  },
  {
    "name": "Tata Tea Gold Leaf Tea - 500g",
    "description": "Tata Tea Gold Leaf Tea - 500g",
    "price_amazon": 255,
    "price_flipkart": 334,
    "price_bigbasket": 240,
    "image": "https://www.bigbasket.com/media/uploads/p/l/240067_19-tata-tea-gold-tea.jpg",
    "product_url_a": "https://www.amazon.in/Tata-Tea-Gold-Black-Pouch/dp/B00XW5HH6U",
    "product_url_f": "https://www.flipkart.com/tata-gold-tea-500g-pack-1-pouch/p/itmedc64d585d8be",
    "product_url_b": "https://www.bigbasket.com/pd/240067/tata-tea-gold-tea-500-g/?nc=cl-prod-list&t_pos_sec=1&t_pos_item=1&t_s=Assam+Teas+With+Gently+Rolled+Aromatic+Long+Leaves%252C+Rich+%2526+Aromatic+Chai%252C+Black+Tea"
  },
  {
    "name": "Amul Processed Cheese - 200g",
    "description": "Amul Processed Cheese - 200g",
    "price_amazon": 130,
    "price_flipkart": 106,
    "price_bigbasket": 135,
    "image": "https://www.bigbasket.com/media/uploads/p/l/104615_9-amul-processed-cheese-cubes.jpg",
    "product_url_a": "https://www.amazon.in/Amul-Cheese-Cubes-200g-Pack/dp/B018E0GO9S/",
    "product_url_f": "https://www.flipkart.com/amul-plain-processed-cheese-block/p/itmff2frhm6kjt5g?",
    "product_url_b": "https://www.bigbasket.com/pd/104615/amul-processed-cheese-cubes-200-g-carton/?nc=cl-prod-list&t_pos_sec=1&t_pos_item=1&t_s=Processed+Cheese+Cubes"
  },
  {
    "name": "Go Cheese Slices - 100g",
    "description": "Go Cheese Slices - 100g",
    "price_amazon": 80,
    "price_flipkart": 53,
    "price_bigbasket": 79 ,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40005949_2-go-cheese-slice-plain.jpg",
    "product_url_a": "https://www.amazon.in/Go-Slice-Cheese-200g/dp/B07HGPG9KJ/ref",
    "product_url_f": "https://www.flipkart.com/go-plain-processed-cheese-slices/p/itmfd7yvsqzgyyyq?",
    "product_url_b": "https://www.bigbasket.com/pd/40005949/go-cheese-slice-plain-100-g-pouch/?nc=cl-prod-list&t_pos_sec=1&t_pos_item=3&t_s=Cheese+Slice+-+Plain%252C+Made+from+Cow%2527s+Milk"
  },
  {
    "name": "Pringles Pizza Potato Chips - 107g",
    "description": "Pringles Pizza Potato Chips - 107g",
    "price_amazon": 115,
    "price_flipkart": 95,
    "price_bigbasket": 116,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40127974_7-pringles-potato-crisps-pizza-flavour.jpg",
    "product_url_a": "https://www.amazon.in/Pringles-Pizza-Flavour-Potato-Crisps/dp/B0BS3ZSKWQ/ref",
    "product_url_f": "https://www.flipkart.com/pringles-potato-chips-pizza-flavor-crispy-snack-movie-game-nights-on-the-go/p/itmc4f8e21383eb1?",
    "product_url_b": "https://www.bigbasket.com/pd/40127974/pringles-potato-crisps-pizza-flavour-107-g/?nc=cl-prod-list&t_pos_sec=1&t_pos_item=1&t_s=Potato+Chips+-+Pizza+Flavoured%252C+Crunchy%252C+Crispy"
  },
  
];


async function callProducts(){
    await Product.deleteMany({});
    const insertedProducts = await Product.insertMany(products);
    console.log("saved successfully");
}

callProducts().then(() => {
  mongoose.connection.close();
});
