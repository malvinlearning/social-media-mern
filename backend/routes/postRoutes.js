
import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
    getLikedPosts,
    commentOnPost,
	createPost,
    deletePost,
    likeUnlikePost,
    getAllPosts,
    getFollowingPosts   
} from "../controllers/postController.js";

const router = express.Router();
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.get("/likes/:id", protectRoute, getLikedPosts);
//router.get("/user/:username", protectRoute, getUserPosts);
router.get("/all", protectRoute, getAllPosts);
router.get("/following", protectRoute, getFollowingPosts);
export default router;