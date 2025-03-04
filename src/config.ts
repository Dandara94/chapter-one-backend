import dotenv from "dotenv";
import { z } from "zod";

dotenv.config(); // Charge les variables d'environnement

// Définition du schéma de validation avec Zod
const envSchema = z.object({
  PORT: z.string().transform(Number).default("5000"), // Transforme en number
  // MONGO_URI: z.string().url(), // Vérifie si c'est une URL valide
  // JWT_SECRET: z.string().min(10), // Vérifie que le secret a min 10 caractères
});

// Validation des variables d'environnement
const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error(
    "❌ Erreur dans les variables d'environnement",
    env.error.format()
  );
  process.exit(1); // Arrête l'exécution si erreur
}

export const config = env.data; // Exporte les valeurs validées
