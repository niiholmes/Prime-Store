import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    category: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    tagline: { type: String, required: true },
    brief: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true},
    description: { type: String, required: true},
    countInStock: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;