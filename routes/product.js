const express = require("express");
const Product = require("../models/Product.js");

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// export default router;
module.exports = router;
