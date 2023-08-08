import { Request, Response } from "express";
import BlogModel from "../model/model";
import {
    CreateBlogInput, FilterQueryInput, ParamsInput, UpdateBlogInput
} from "./blog.schema";

//create blog
export const createBlogController = async (
    req: Request<{}, {}, CreateBlogInput>,
    res: Response
) => {
    try {
        const { title, description, category, published } = req.body;

        const blog = await BlogModel.create({
            title, description, category, published,
        });

        res.status(201).json({
            status: "success",
            data: {
                blog,
            },
        });
    } catch (error: any) {
        //can't record blogs with the same title
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(409).json({
                status: "error",
                message: error.message,
            });
        }

        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

// to edit Blog
export const updateBlogController = async (
    req: Request<UpdateBlogInput["params"], {}, UpdateBlogInput["body"]>,
    res: Response
) => {
    try {
        const result = await BlogModel.update(
            { ...req.body, updatedAt: Date.now() },
            {
                where: {
                    id: req.params.blogId,
                },
            }
        );

        if (result[0] === 0) {
            return res.status(404).json({
                status: "fail",
                message: "Blog not found",
            });
        }

        //to retrieve the updated record
        const blog = await BlogModel.findByPk(req.params.blogId);

        res.status(200).json({
            status: "success",
            data: {
                blog,
            },
        });
    } catch (error: any) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

//find one blog
export const findBlogController = async (
    req: Request<ParamsInput>,
    res: Response
) => {
    try {
        const blog = await BlogModel.findByPk(req.params.blogId);

        if(!blog) {
            return res.status(404).json({
                status: "fail",
                message: "Blog not found",
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                blog,
            },
        });
    } catch (error: any) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

// get all blogs
export const findAllBlogsController = async (
    req: Request<{}, {}, {}, FilterQueryInput>,
    res: Response
) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const skip = (page - 1) * limit;

        const blogs = await BlogModel.findAll({ limit, offset: skip});

        res.status(200).json({
            status: "success",
            results: blogs.length,
            blogs,
        });
    } catch (error: any) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

//delete blog
export const deleteBlogController = async (
    req: Request<ParamsInput>,
    res: Response
) => {
    try {
        const result = await BlogModel.destroy({
            where: { id: req.params.blogId },
            force: true,
        });

        if (result === 0) {
            return res.status(404).json({
                status: "fail",
                message: "Blog not found",
            });
        }

        // to return to client
        res.status(204).json();
    } catch (error: any) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};