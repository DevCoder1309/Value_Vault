import mongoose from "mongoose";
import Product from './products.js';

mongoose
  .connect("mongodb://127.0.0.1:27017/value_vault")
  .then(() => console.log("MONGODB CONNECTED"))
  .catch(() => console.log("ERROR"));


const products = [

];


async function callProducts(){
    // await Product.deleteMany({});
    const insertedProducts = await Product.insertMany(products);
    console.log("saved successfully");
}

callProducts().then(() => {
  mongoose.connection.close();
});
