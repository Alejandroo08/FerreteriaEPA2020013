// importar todo lo de la libreria "express"
import express from "express";
// importar la constante que contiene el router
import productsRoutes from "./src/routes/products.js";
// Creo una constante que es igual a la libreria que acabo de importar y lo ejecuto
const app = express();
// middleware para aceptar datos desde postman
app.use(express.json());
// monta las rutas de productos en la aplicación
app.use("/api/products", productsRoutes);
// Exporto la constante para poder usar express en otros archivos
export default app;