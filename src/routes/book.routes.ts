// import express, type { Request, Response } from "express";
import { Router, Request, Response } from "express";
// import { Book } from "../models/book.model";
import { dbFirestore } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

const router = Router();

// 🔹 Ajouter un livre (POST)
router.post("/", async (req: Request, res: Response) => {
  try {
    const bookRef = await addDoc(collection(dbFirestore, "books"), req.body);
    res.json(bookRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

// 🔹 Récupérer tous les livres (GET)
// router.get("/", async (req: Request, res: Response) => {
//   try {
//     const books = await Book.find();
//     res.json(books);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Erreur lors de la récupération des livres", error });
//   }
// });

// 🔹 Récupérer un livre par ID (GET)
// router.get("/:id", async (req: Request<BookParams>, res: Response) => {
//   try {
//     const book = await Book.findById(req.params.id);
//     if (!book) return res.status(404).json({ message: "Livre non trouvé" });
//     res.json(book);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Erreur lors de la récupération du livre", error });
//   }
// });

// 🔹 Mettre à jour un livre (PUT)
// router.put("/:id", async (req: Request<BookParams>, res: Response) => {
//   try {
//     const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!book) return res.status(404).json({ message: "Livre non trouvé" });
//     res.json(book);
//   } catch (error) {
//     res
//       .status(400)
//       .json({ message: "Erreur lors de la mise à jour du livre", error });
//   }
// });

// 🔹 Supprimer un livre (DELETE)
// router.delete("/:id", async (req: Request<BookParams>, res: Response) => {
//   try {
//     const book = await Book.findByIdAndDelete(req.params.id);
//     if (!book) return res.status(404).json({ message: "Livre non trouvé" });
//     res.json({ message: "Livre supprimé avec succès" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Erreur lors de la suppression du livre", error });
//   }
// });

export default router;
