import Router from "express";
import { getCharacter, postCharacter, getCharacterById, deleteCharacter } from "./controllers/characterController.js";

const router = Router();

router.get("/", (req, res) => {
  getCharacter(req, res);
});
router.post("/", (req, res) => {
  postCharacter(req, res);
});
router.get("/:id", (req, res) => {
  getCharacterById(req, res);
});
router.delete("/:id", (req, res) => {
  deleteCharacter(req, res);
}); 

export default router;