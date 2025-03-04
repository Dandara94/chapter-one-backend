// import { Request, Response } from "express";
// import { User } from "../models/user.model";

// // 📌 Récupérer tous les utilisateurs
// export const getUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Erreur serveur", error });
//   }
// };

// // 📌 Ajouter un utilisateur
// export const createUser = async (req: Request, res: Response) => {
//   try {
//     const { name, email, age } = req.body;
//     const newUser = new User({ name, email, age });
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: "Erreur lors de l'ajout", error });
//   }
// };

// // 📌 Supprimer un utilisateur
// export const deleteUser = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     await User.findByIdAndDelete(id);
//     res.json({ message: "Utilisateur supprimé !" });
//   } catch (error) {
//     res.status(400).json({ message: "Erreur lors de la suppression", error });
//   }
// };
