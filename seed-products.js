// Run this with: node seed-products.js
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is missing from .env.local");
  process.exit(1);
}

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String },
  images: { type: [String], default: [] },
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

const sampleProducts = [
  {
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 99.99,
    stock: 45,
    category: "Electronics",
    images: ["https://via.placeholder.com/300?text=Headphones"],
  },
  {
    name: "Smart Watch",
    description: "Advanced fitness tracking smart watch with heart rate monitor",
    price: 199.99,
    stock: 28,
    category: "Electronics",
    images: ["https://via.placeholder.com/300?text=SmartWatch"],
  },
  {
    name: "USB-C Cable",
    description: "Durable 2-meter USB-C charging and data cable",
    price: 12.99,
    stock: 150,
    category: "Accessories",
    images: ["https://via.placeholder.com/300?text=Cable"],
  },
  {
    name: "Phone Case",
    description: "Protective waterproof phone case with shock absorption",
    price: 24.99,
    stock: 87,
    category: "Accessories",
    images: ["https://via.placeholder.com/300?text=PhoneCase"],
  },
  {
    name: "Screen Protector",
    description: "Tempered glass screen protector set (3 pack)",
    price: 9.99,
    stock: 200,
    category: "Accessories",
    images: ["https://via.placeholder.com/300?text=ScreenProtector"],
  },
  {
    name: "Portable Charger",
    description: "20000mAh fast-charging portable power bank",
    price: 34.99,
    stock: 52,
    category: "Electronics",
    images: ["https://via.placeholder.com/300?text=PowerBank"],
  },
  {
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for ergonomic working",
    price: 39.99,
    stock: 31,
    category: "Accessories",
    images: ["https://via.placeholder.com/300?text=LaptopStand"],
  },
  {
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precision tracking",
    price: 29.99,
    stock: 64,
    category: "Accessories",
    images: ["https://via.placeholder.com/300?text=WirelessMouse"],
  },
  {
    name: "Keyboard",
    description: "Mechanical RGB gaming keyboard with custom switches",
    price: 89.99,
    stock: 23,
    category: "Electronics",
    images: ["https://via.placeholder.com/300?text=Keyboard"],
  },
  {
    name: "Monitor Light Bar",
    description: "Eye-caring monitor light bar with auto-dimming",
    price: 79.99,
    stock: 18,
    category: "Electronics",
    images: ["https://via.placeholder.com/300?text=LightBar"],
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to DB");

    // Clear existing products
    const existing = await Product.countDocuments();
    if (existing > 0) {
      await Product.deleteMany({});
      console.log("⚠️  Cleared existing products");
    }

    // Create new products
    await Product.insertMany(sampleProducts);

    console.log(`🎉 Successfully created ${sampleProducts.length} sample products!`);
    console.log("\nYour inventory now has:");
    console.log("- Electronics: Headphones, Smart Watch, Charger, Keyboard, Monitor Light");
    console.log("- Accessories: Cables, Cases, Screen Protectors, Stand, Mouse");
    console.log("\nNow visit your dashboard to see the full inventory! 📦");
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding:", error);
    process.exit(1);
  }
}

seed();
