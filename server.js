const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./Models/productModel");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is from backend");
});

app.get("api/produccts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
mongoose
  .connect(
    "mongodb+srv://mogashoablessing676:3PKKUO67Ui8P0Ciw@backend.hoi7r.mongodb.net/?retryWrites=true&w=majority&appName=backend"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
