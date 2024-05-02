import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price_amazon: {
    type: Number,
    required: true,
  },
  price_flipkart: {
    type: Number,
    required: true,
  },
  price_bigbasket: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  product_url_a: {
    type: String,
  },
  product_url_f: {
    type: String,
  },
  product_url_b: {
    type: String,
  },
});

export default mongoose.model("Product", productSchema);
