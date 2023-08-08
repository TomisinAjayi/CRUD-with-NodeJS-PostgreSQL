import express from "express";
import { validate } from "../middleware/validate"
import { createBlogController, deleteBlogController, findAllBlogsController, findBlogController, updateBlogController } from "../controller/blog.controller";
import { createBlogSchema, updateBlogSchema } from "../controller/blog.schema";

const router = express.Router();

router
    .route("/")
    .get(findAllBlogsController)
    .post(validate(createBlogSchema), createBlogController);
router
    .route("/:blogId")
    .get(findBlogController)
    .patch(validate(updateBlogSchema), updateBlogController)
    .delete(deleteBlogController);

    export default router;