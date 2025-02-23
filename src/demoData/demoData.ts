// Mock data representing database collections
export interface User {
    id: string;
    name: string;
    avatar: string;
    level: string;
    rating: number;
    totalReviews: number;
    location: string;
    memberSince: string;
    languages: string[];
    description: string;
    responseTime: string;
    lastDelivery: string;
}

export interface Portfolio {
    id: string;
    userId: string;
    title: string;
    image: string;
    description: string;
    category: string;
}

export interface GigPackage {
    id: string;
    name: string;
    price: number;
    description: string;
    deliveryTime: number;
    revisions: number;
    features: string[];
}

export interface Gig {
    id: string;
    userId: string;
    title: string;
    category: string;
    subcategory: string;
    rating: number;
    totalReviews: number;
    startingPrice: number;
    description: string;
    whatYouWillGet: string[];
    images: string[];
    packages: GigPackage[];
    tags: string[];
}

// Demo data
export const userData: User = {
    id: "u1",
    name: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    level: "Level 2 Seller",
    rating: 4.9,
    totalReviews: 847,
    location: "Toronto, Canada",
    memberSince: "Aug 2021",
    languages: ["English", "French"],
    description: "Professional web developer with 5+ years of experience specializing in React and Node.js development. Passionate about creating clean, efficient, and user-friendly applications.",
    responseTime: "~2 hours",
    lastDelivery: "about 14 hours ago"
};

export const portfolioData: Portfolio[] = [
    {
        id: "p1",
        userId: "u1",
        title: "E-commerce Dashboard",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        description: "Modern dashboard design with dark mode support",
        category: "Web Development"
    },
    {
        id: "p2",
        userId: "u1",
        title: "Social Media App",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
        description: "Full-stack social media application",
        category: "Web Development"
    },
    {
        id: "p3",
        userId: "u1",
        title: "Portfolio Website",
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&h=500&fit=crop",
        description: "Responsive portfolio website with animations",
        category: "Web Development"
    }
];

export const gigData: Gig = {
    id: "g1",
    userId: "u1",
    title: "I will create a professional full-stack web application",
    category: "Programming & Tech",
    subcategory: "Web Development",
    rating: 4.9,
    totalReviews: 847,
    startingPrice: 99,
    description: "I will create a custom, responsive, and scalable web application using modern technologies including React, Node.js, and your choice of database. All projects include clean code, documentation, and deployment assistance.",
    whatYouWillGet: [
        "Custom web application development",
        "Responsive design for all devices",
        "Database integration",
        "API development",
        "Source code with documentation",
        "Deployment assistance"
    ],
    images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop"
    ],
    packages: [
        {
            id: "pkg1",
            name: "Basic",
            price: 99,
            description: "Simple web application with basic features",
            deliveryTime: 7,
            revisions: 2,
            features: [
                "1 page",
                "Responsive Design",
                "Basic Features",
                "Source Code"
            ]
        },
        {
            id: "pkg2",
            name: "Standard",
            price: 199,
            description: "Advanced web application with more features",
            deliveryTime: 14,
            revisions: 3,
            features: [
                "3 pages",
                "Responsive Design",
                "Advanced Features",
                "Database Integration",
                "Source Code",
                "Documentation"
            ]
        },
        {
            id: "pkg3",
            name: "Premium",
            price: 299,
            description: "Complete web application with all features",
            deliveryTime: 21,
            revisions: 5,
            features: [
                "5 pages",
                "Responsive Design",
                "All Features",
                "Database Integration",
                "API Development",
                "Source Code",
                "Documentation",
                "Deployment"
            ]
        }
    ],
    tags: ["web development", "react", "node.js", "full-stack", "responsive design"]
};