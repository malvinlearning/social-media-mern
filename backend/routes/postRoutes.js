
import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
	createPost,
    deletePost
} from "../controllers/postController.js";

const router = express.Router();
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
/*router.get("/following", protectRoute, getFollowingPosts);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/user/:username", protectRoute, getUserPosts);
router.get("/all", protectRoute, getAllPosts);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);

*/
export default router;