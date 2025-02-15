export interface GigFormData {
    overview: {
        title: string;
        category: string;
        subcategory: string;
        serviceType: string;
        tags: string[];
        searchTags: string[];
    };
    pricing: {
        pricing: {
            basicPackage: {
                name: string;
                description: string;
                price: number;
                deliveryTime: number;
                revisions: number;
            };
            standardPackage: {
                name: string;
                description: string;
                price: number;
                deliveryTime: number;
                revisions: number;
            };
            premiumPackage: {
                name: string;
                description: string;
                price: number;
                deliveryTime: number;
                revisions: number;
            };
        };
    },

    description: {
        description: string;
        faqs: Array<{
            question: string;
            answer: string;
        }>;
        requirements: string[];
    },
    gallery: {
        images: string[];
        video?: string;
    };
}