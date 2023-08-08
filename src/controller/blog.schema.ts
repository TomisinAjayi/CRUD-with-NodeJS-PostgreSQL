import { z } from "zod";

export const createBlogSchema = z.object({
    body: z.object({
        title: z.string({
            required_error: "Title is required",
        }),
        description: z.string({
            required_error: "Description is required",
        }),
        category: z.string().optional(),
        published: z.boolean().optional(),
    }),
});

export const params = z.object({
    blogId: z.string(),
});

export const updateBlogSchema = z.object({
    params,
    body: z
        .object({
            title: z.string(),
            description: z.string(),
            category: z.string(),
            published: z.boolean(),
        })
        .partial(),
});

export const filterQuery = z.object({
    limit: z.number().default(1),
    page: z.number().default(10),
});

export type ParamsInput = z.TypeOf<typeof params>;
export type FilterQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateBlogInput = z.TypeOf<typeof createBlogSchema>["body"];
export type UpdateBlogInput = z.TypeOf<typeof updateBlogSchema>;