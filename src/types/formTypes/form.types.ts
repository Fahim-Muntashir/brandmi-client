// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { gigOverviewSchema, gigPricingSchema } from "@/schemas/gig.schema";
// import { z, AnyZodObject } from "zod";

// // Recursive mapped type to transform keys
// type FormattedSchema<T, Path extends string = ""> = {
//     [K in keyof T as Uppercase<string & K>]: T[K] extends object
//     ? FormattedSchema<T[K], `${Path}${K extends string ? `${K}` : ""}.`>
//     : `${Path}${K extends string ? `${K}` : ""}`;
// };

// // Recursive function to format schema keys
// const formatSchemaKeys = <T extends AnyZodObject>(schema: T, path: string = ""): FormattedSchema<z.infer<T>> => {
//     return Object.keys(schema.shape).reduce((acc, key) => {
//         const property = schema.shape[key];
//         const newPath = path ? `${path}.${key}` : key; // Concatenate the current path

//         if (property instanceof z.ZodObject) {
//             // If the property is an object, call recursively and pass the new path
//             acc[key.toUpperCase()] = formatSchemaKeys(property, newPath);
//         } else {
//             // If it's not an object, just return the path as the value
//             acc[key.toUpperCase()] = newPath;
//         }
//         return acc;
//     }, {} as any); // Dynamic return type
// };


// export const gigOverviewName = formatSchemaKeys(gigOverviewSchema)
// export const gigPricingName = formatSchemaKeys(gigPricingSchema)


export const gigOverviewName = {
    TITLE: "title",
    CATEGORY: "category",
    SUBCATEGORY: "subcategorY",
    SEARCH_TAG: "searchTags",
    TAGS: "tags"
}


export const gigPricingNamePrefix = {
    BASIC_PRICE: "pricing.basicPackage",
    STANDARD_PRICE: "pricing.standardPackage",
    PREMIUM_PRICE: "pricing.premiumPackage"
}
export const gigPricingName = {
    NAME: "name",
    DESCRIPTION: "description",
    PRICE: "price",
    DELIVERY_TIME: "deliveryTime",
    REVISION: "revisions"

}


