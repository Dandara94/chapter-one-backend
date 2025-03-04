// import mongoose from "mongoose";
// import { config } from "./config"; // On importe la config validée

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(config.MONGO_URI, {
//       serverSelectionTimeoutMS: 5000, // Timeout si MongoDB ne répond pas
//     });
//     console.log("✅ Connecté à MongoDB !");
//   } catch (error) {
//     console.error("❌ Erreur de connexion MongoDB :", error);
//     process.exit(1); // Stoppe l'application en cas d'erreur
//   }
// };
