'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import profile from '@/../src/assests/offers/profile1.png'
import { OfferType } from '../HomePage/PopularServices/TrendingOffers'

export default function FreelanceServiceCard({ service }: { service: OfferType }) {

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleTags = () => setIsExpanded(!isExpanded)

    return (
        <Card className="w-full max-w-[320px] mx-auto overflow-hidden transition-all duration-300">
            <div className="relative w-full aspect-video">
                <Image
                    src={service?.offer_image}
                    alt="Professional web design service"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <CardHeader className="px-5">
                <h2 className="text-[20px]
                font-medium leading-tight text-gray-800">
                    Web Design Services for Modern Businesses
                </h2>
            </CardHeader>
            <CardContent className="px-4 space-y-1">
                <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary">Web Design</Badge>
                        <Badge variant="secondary">Development</Badge>
                        <Badge variant="secondary">Responsive</Badge>
                        {isExpanded && (
                            <>
                                <Badge variant="secondary">SEO</Badge>
                                <Badge variant="secondary">UI/UX</Badge>
                                <Badge variant="secondary">Mobile-First</Badge>

                            </>
                        )} <Button
                            variant="link"
                            size="sm"
                            onClick={toggleTags}
                            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                            aria-expanded={isExpanded}
                            aria-controls="expandable-tags"
                        >
                            {isExpanded ? (
                                <>
                                    Show less <ChevronUp className="ml-1 h-4 w-4" />
                                </>
                            ) : (
                                <>
                                    Show more <ChevronDown className="ml-1 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </div>

                </div>
                <div className="flex items-center justify-between">
                    <div className='flex gap-2'>
                        <div className="relative w-10 h-10 md:w-12 md:h-12">
                            <Image
                                src={profile}
                                alt="Freelancer John Doe"
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div className="">
                            <p className="font-semibold text-sm md:text-base text-">John Doe</p>
                            <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
                                <span className="text-xs md:text-sm text-muted-foreground ml-1">4.9 (120 orders)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg md:text-xl font-bold">$150</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="py-2 bg-muted/50">
                <p className="text-xs md:text-sm font-medium text-muted-foreground text-right w-full">Delivery in 5 days</p>
            </CardFooter>
        </Card>
    )
}