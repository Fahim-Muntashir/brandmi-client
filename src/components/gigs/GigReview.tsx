import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from 'lucide-react'

export default function ReviewCard() {
    return (
        <>
            <h2 className="text-2xl font-bold mb-2">Reviews</h2>

            <Card className="w-full my-3">
                <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="w-12 h-12">
                        <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-lg font-semibold">R image-docs rjrcollective</h2>
                        <p className="text-sm text-muted-foreground">United Kingdom</p>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm">
                        We had a great experience working with Rafik on our 3D product rendering project. The quality of the work was outstanding, with high attention to detail and excellent execution of our vision. Rafik was responsive throughout the project, making collaboration easy and efficient. There was a slight delay...
                    </p>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-current"
                            />
                        ))}
                        <span className="ml-2 text-sm font-medium">5 out of 5</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Price: US$400-US$600</span>
                        <span>Duration: 2 weeks</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-full my-3">
                <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="w-12 h-12">
                        <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-lg font-semibold">R image-docs rjrcollective</h2>
                        <p className="text-sm text-muted-foreground">United Kingdom</p>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm">
                        We had a great experience working with Rafik on our 3D product rendering project. The quality of the work was outstanding, with high attention to detail and excellent execution of our vision. Rafik was responsive throughout the project, making collaboration easy and efficient. There was a slight delay...
                    </p>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-current"
                            />
                        ))}
                        <span className="ml-2 text-sm font-medium">5 out of 5</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Price: US$400-US$600</span>
                        <span>Duration: 2 weeks</span>
                    </div>
                </CardContent>
            </Card>
            <Card className="w-full">
                <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="w-12 h-12">
                        <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-lg font-semibold">R image-docs rjrcollective</h2>
                        <p className="text-sm text-muted-foreground">United Kingdom</p>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm">
                        We had a great experience working with Rafik on our 3D product rendering project. The quality of the work was outstanding, with high attention to detail and excellent execution of our vision. Rafik was responsive throughout the project, making collaboration easy and efficient. There was a slight delay...
                    </p>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-current"
                            />
                        ))}
                        <span className="ml-2 text-sm font-medium">5 out of 5</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Price: US$400-US$600</span>
                        <span>Duration: 2 weeks</span>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

