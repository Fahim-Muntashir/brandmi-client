import { z } from "zod";

export const gigSchema = z.object({
    title: z.string().min(15).max(80),
    category: z.string().min(1),
    subcategory: z.string().min(1),
    description: z.string().min(120).max(1200),
    searchTags: z.string(),
    images: z.array(z.string()).min(1),
    packages: z.object({
        basic: z.object({
            name: z.string(),
            description: z.string(),
            price: z.number().min(5),
            deliveryTime: z.number(),
            revisions: z.number(),
            features: z.array(z.string()),
        }),
        standard: z.object({
            name: z.string(),
            description: z.string(),
            price: z.number().min(5),
            deliveryTime: z.number(),
            revisions: z.number(),
            features: z.array(z.string()),
        }),
        premium: z.object({
            name: z.string(),
            description: z.string(),
            price: z.number().min(5),
            deliveryTime: z.number(),
            revisions: z.number(),
            features: z.array(z.string()),
        }),
    }),
});






export const gigOverviewSchema = z.object({

    title: z.string().min(15).max(80),
    category: z.string().min(1),
    subcategory: z.string().min(1),
    searchTags: z.array(z.string()),
    tags: z.array(z.string().min(1)),
})

export const gigPricingSchema = z.object({
    pricing: z.object({
        basicPackage: z.object({
            name: z.string(),
            description: z.string(),
            price: z.number().min(5),
            deliveryTime: z.number(),
            revisions: z.number(),
        }),
        standardPackage: z.object({
            name: z.string(),
            description: z.string(),
            price: z.number().min(5),
            deliveryTime: z.number(),
            revisions: z.number(),
        }),
        premiumPackage: z.object({
            name: z.string(),
            description: z.string(),
            price: z.number().min(5),
            deliveryTime: z.number(),
            revisions: z.number(),
        }),
    }),

})



export const gigDescriptionSchema = z.object({
    description: z.string(),
    faqs: z.array(
        z.object({
            question: z.string(),
            answer: z.string(),
        })
    ),
    requirements: z.array(z.string()),
});


export const gigGallerySchema = z.object({
    images: z.array(z.string()).min(1),
})