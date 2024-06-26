import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changePassword,
  getCurrentUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(upload.single("logo"), registerUser);
router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").patch(verifyJWT, changePassword);

router.route("/get-current-user").get(verifyJWT, getCurrentUser);

export default router;
