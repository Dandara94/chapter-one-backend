// Express.js est un framework minimaliste et flexible pour Node.js, utilisé pour créer des serveurs web et API. Il simplifie la gestion des routes, des requêtes et des réponses HTTP.
import express from "express";
// CORS empêche les requêtes non autorisées venant d'autres domaines.Permet d’autoriser ou de bloquer des requêtes selon leur origine.CORS pour sécuriser l'accès à l’API.
import cors from "cors";
//dotenv est un module qui permet de charger des variables d’environnement depuis un fichier .env dans un projet Node.js. Cela évite de stocker des informations sensibles directement dans le code source, comme des clés API, des URL de base de données ou des secrets.
import dotenv from "dotenv";
// import { connectDB } from "./database"; // Importation de la connexion MongoDB
import { config } from "./config"; // Importation des variables d'environnement validées
import bookRoutes from "./routes/book.routes"; // Import des routes Book
// import userRoutes from "./routes/user.routes"; // Import du router

const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = config.PORT; // Récupération du port depuis config.ts

dotenv.config(); // Charge les variables d'environnement

//Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes); // Ajout des routes sous /api/books
// app.use("/users", userRoutes); // Lier les routes des utilisateurs

app.get("/", (req, res) => {
  res.send("Hello, Node.js + Express + TypeScript!");
});

app.listen(PORT, () => {
  // await connectDB(); // Connexion MongoDB
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
