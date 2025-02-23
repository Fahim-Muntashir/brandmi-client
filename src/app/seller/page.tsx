import Image from "next/image"
import { Star, Heart, Clock, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-[300px_1fr]">
                    {/* Profile Sidebar */}
                    <div className="space-y-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative">
                                <Image
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33323-1-1679726889%20(1)-OSkqcPh3Tyusf6lqsUWlxx46t7nmwT.png"
                                    alt="Profile picture"
                                    width={150}
                                    height={150}
                                    className="rounded-full"
                                />
                                <Badge className="absolute -bottom-2 right-0 bg-purple-600">LEVEL TWO</Badge>
                            </div>
                            <h1 className="mt-4 text-2xl font-bold">M. Abuzar Asif</h1>
                            <p className="text-muted-foreground">@abuxarstudios</p>
                            <div className="mt-2 flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="ml-1 text-sm">4.8 (68 reviews)</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button className="flex-1 bg-emerald-500 hover:bg-emerald-600">Contact Me</Button>
                            <Button variant="outline" className="flex-1">
                                Get a Quote
                            </Button>
                        </div>

                        <div className="space-y-4 rounded-lg border p-4">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">From</span>
                                <span className="ml-auto font-medium">Pakistan</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Member since</span>
                                <span className="ml-auto font-medium">Sep 2020</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Avg. Response Time</span>
                                <span className="ml-auto font-medium">5 hours</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Last Delivery</span>
                                <span className="ml-auto font-medium">22 days</span>
                            </div>
                        </div>

                        <div className="space-y-4 rounded-lg border p-4">
                            <h2 className="font-semibold">Description</h2>
                            <p className="text-sm text-muted-foreground">
                                Hi, My name is abuzar, I have 3+ years of experience in graphic design and in 3d art. I also run an IT
                                institute in Pakistan
                            </p>
                        </div>

                        <div className="space-y-4 rounded-lg border p-4">
                            <h2 className="font-semibold">Languages</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm">English</span>
                                    <span className="text-sm text-muted-foreground">Conversational</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm">Urdu (اردو)</span>
                                    <span className="text-sm text-muted-foreground">Fluent</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gigs Grid */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">abuxarstudios's Gigs</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: "I will design any type of 3d character in your budget",
                                    rating: 4.9,
                                    reviews: 41,
                                    price: 10,
                                    image:
                                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33323-1-1679726889%20(1)-OSkqcPh3Tyusf6lqsUWlxx46t7nmwT.png",
                                },
                                {
                                    title: "I will create 3d printable characters and props",
                                    rating: 4.9,
                                    reviews: 7,
                                    price: 15,
                                    image:
                                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33323-1-1679726889%20(1)-OSkqcPh3Tyusf6lqsUWlxx46t7nmwT.png",
                                },
                                {
                                    title: "I will create a realistic 3d human model for you in 24 hours",
                                    rating: 5.0,
                                    reviews: 7,
                                    price: 5,
                                    image:
                                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33323-1-1679726889%20(1)-OSkqcPh3Tyusf6lqsUWlxx46t7nmwT.png",
                                },
                            ].map((gig, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <CardHeader className="p-0">
                                        <div className="relative aspect-video">
                                            <Image src={gig.image || "/placeholder.svg"} alt={gig.title} fill className="object-cover" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33323-1-1679726889%20(1)-OSkqcPh3Tyusf6lqsUWlxx46t7nmwT.png"
                                                alt="Seller"
                                                width={24}
                                                height={24}
                                                className="rounded-full"
                                            />
                                            <span className="text-sm font-medium">abuxarstudios</span>
                                            <Badge variant="secondary" className="ml-auto">
                                                Level 2 Seller
                                            </Badge>
                                        </div>
                                        <p className="mt-2 line-clamp-2 text-sm">{gig.title}</p>
                                        <div className="mt-2 flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium">{gig.rating}</span>
                                            <span className="text-sm text-muted-foreground">({gig.reviews})</span>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <Button variant="ghost" size="icon">
                                                <Heart className="h-4 w-4" />
                                            </Button>
                                            <div className="text-right">
                                                <p className="text-xs text-muted-foreground">STARTING AT</p>
                                                <p className="text-lg font-bold">${gig.price}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

