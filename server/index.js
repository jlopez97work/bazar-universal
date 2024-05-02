"use strict";

const express = require("express"); // Importando express
const app = express(); // Creando la aplicacion

const cors = require("cors"); // Importando CORS
require("dotenv").config(); // Para acceder a las variables de entorno

app.use(cors()); // Para poder acceder desde todos los origenes a la API
app.use(express.json()); // Para aceptar las request.body y parsearlas

//Data
const products = require("./data/products.json");
const productList = products.products;

console.log(typeof products);

// Home
app.get("/", (req, res) => {
  res.send("<h1>API Bazar Universal<h1>");
});

// Routes
// Route for search products
app.get("/api/items", (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  const filteredProducts = productList.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase())
  );
  res.json(filteredProducts);
});

// Route for details for a product
app.get("/api/items/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const selectedProduct = productList.find(
    (product) => product.id === productId
  );

  if (!selectedProduct) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(selectedProduct);
});

app.listen(process.env.PORT, () => {
  console.log(`Escuchando por el puerto ${process.env.PORT}`);
});
