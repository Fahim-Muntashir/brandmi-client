"use client"

import * as React from "react"
import { Heart, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { SearchBox } from "@/components/Search/SearchBox"

interface Filter {
    type: string
    value: string
}

function ServicesPages() {
    const [favorites, setFavorites] = React.useState<number[]>([])
    const [selectedFilters, setSelectedFilters] = React.useState<Filter[]>([
        { type: 'all', value: 'All Result' }
    ])

    const toggleFavorite = (id: number) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
        )
    }

    const addFilter = (type: string, value: string) => {
        if (!selectedFilters.some(filter => filter.type === type && filter.value === value)) {
            setSelectedFilters([...selectedFilters, { type, value }])
        }
    }

    const removeFilter = (type: string, value: string) => {
        setSelectedFilters(selectedFilters.filter(
            filter => !(filter.type === type && filter.value === value)
        ))
    }

    const services = [
        {
            id: 1,
            image: "/placeholder.svg?height=225&width=400",
            seller: "A. Jamett",
            level: "Level 2",
            isChoice: true,
            description: "I will create all kinds of graphic design for your projects",
            rating: 4.9,
            reviews: 45,
            startingPrice: 45
        },
        {
            id: 2,
            image: "/placeholder.svg?height=225&width=400",
            seller: "Designrar",
            level: "Level 2",
            description: "I will be your graphic designer for any graphic design task",
            rating: 4.8,
            reviews: "1k+",
            startingPrice: 15
        },
        {
            id: 3,
            image: "/placeholder.svg?height=225&width=400",
            seller: "Samreengraphics",
            level: "Level 2",
            description: "I will be your graphic designer in adobe illustrator, coreldraw",
            rating: 4.9,
            reviews: 472,
            startingPrice: 15
        },
        {
            id: 4,
            image: "/placeholder.svg?height=225&width=400",
            seller: "Noman Nawaz",
            level: "Level 2",
            description: "I will do any graphic design work using adobe photoshop, adobe illustrator",
            rating: 4.8,
            reviews: 87,
            startingPrice: 10
        }
    ]

    return (
        <div className="max-w-7xl mx-auto p-6">
            <SearchBox></SearchBox>
            <h1 className="text-xl mt-5 font-semibold mb-6">
                Results for <span className="font-bold">graphic design</span>
            </h1>

            <div className="flex flex-wrap gap-3 mb-6">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                            Category
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 4L6 7.5L9.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => addFilter('category', 'Logo Design')}>
                            Logo Design
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => addFilter('category', 'Web Design')}>
                            Web Design
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => addFilter('category', 'Print Design')}>
                            Print Design
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                            Service options
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 4L6 7.5L9.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => addFilter('service', 'Basic')}>
                            Basic
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => addFilter('service', 'Standard')}>
                            Standard
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => addFilter('service', 'Premium')}>
                            Premium
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                            Seller details
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 4L6 7.5L9.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => addFilter('seller', 'Top Rated')}>
                            Top Rated
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => addFilter('seller', 'Level 2')}>
                            Level 2
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => addFilter('seller', 'Level 1')}>
                            Level 1
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                            Budget
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 4L6 7.5L9.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => addFilter('budget', 'Under $25')}>
                            Under $25
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => addFilter('budget', '$25 to $50')}>
                            $25 to $50
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => addFilter('budget', '$50+')}>
                            $50+
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                            Delivery time
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 4L6 7.5L9.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => addFilter('delivery', '24 Hours')}>
                            24 Hours
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => addFilter('delivery', '3 Days')}>
                            3 Days
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => addFilter('delivery', '7 Days')}>
                            7 Days
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex items-center gap-2 ml-auto">
                    <span className="text-sm">Pro services</span>
                    <Switch onCheckedChange={(checked) => {
                        if (checked) {
                            addFilter('pro', 'Pro services')
                        } else {
                            removeFilter('pro', 'Pro services')
                        }
                    }} />
                </div>
            </div>

            {selectedFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {selectedFilters.map((filter) => (
                        <div
                            key={`${filter.type}-${filter.value}`}
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm"
                        >
                            {filter.value}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-4 w-4"
                                onClick={() => removeFilter(filter.type, filter.value)}
                            >
                                <X className="h-3 w-3" />
                            </Button>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-gray-600">14,000+ results</span>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-2">
                                Relevance
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 4L6 7.5L9.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Relevance</DropdownMenuItem>
                            <DropdownMenuItem>Best Selling</DropdownMenuItem>
                            <DropdownMenuItem>Newest Arrivals</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                    <div key={service.id} className="group relative">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                            <img
                                src={service.image}
                                alt={service.description}
                                className="object-cover w-full h-full"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className={`absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white ${favorites.includes(service.id) ? 'text-red-500' : 'text-gray-600'
                                    }`}
                                onClick={() => toggleFavorite(service.id)}
                            >
                                <Heart className={`h-5 w-5 ${favorites.includes(service.id) ? 'fill-current' : ''}`} />
                            </Button>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-gray-200" />
                                <span className="font-medium">{service.seller}</span>
                                <Badge variant="secondary" className="ml-auto">
                                    {service.level}
                                </Badge>
                                {service.isChoice && (
                                    <Badge variant="default" className="bg-blue-500">
                                        Choice
                                    </Badge>
                                )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{service.description}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1L10.163 5.279L15 6.017L11.5 9.388L12.326 14L8 11.838L3.674 14L4.5 9.388L1 6.017L5.837 5.279L8 1Z" fill="currentColor" />
                                </svg>
                                <span>{service.rating}</span>
                                <span>({service.reviews})</span>
                            </div>
                            <div className="text-sm">
                                From <span className="font-bold">US${service.startingPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesPages;