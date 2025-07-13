import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const savedGigsData = [
  {
    title: "Mobile App Design",
    image: "/placeholder.svg",
  },
  {
    title: "Mobile App Design",
    image: "/placeholder.svg",
  },
];
const savedSellerData = [
  {
    name: "Grace Lee",
    rating: 4.9,
    image: "/placeholder.svg",
  },
  {
    name: "Grace Lee",
    rating: 4.9,
    image: "/placeholder.svg",
  },
  {
    name: "Grace Lee",
    rating: 4.9,
    image: "/placeholder.svg",
  },
];

const SavedGigs = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Gigs & Sellers</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="gigs">
          <TabsList>
            <TabsTrigger value="gigs">Saved Gigs</TabsTrigger>
            <TabsTrigger value="sellers">Saved Sellers</TabsTrigger>
          </TabsList>
          <TabsContent value="gigs">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
              {savedGigsData.map((data) => (
                <div
                  key={data.title}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <Image
                    src={data.image || "/placeholder.svg"}
                    alt={data.title}
                    width={1000}
                    height={1000}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-sm truncate">
                      {data.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="sellers">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
              {savedSellerData.map((data) => (
                <div
                  key={data.name}
                  className="bg-white rounded-lg shadow p-4 flex items-center space-x-4"
                >
                  <Avatar>
                    <AvatarImage src={data.image} alt={data.name} />
                    <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-sm">{data.name}</h3>
                    <p className="text-xs text-gray-500">
                      ⭐ {data.rating.toFixed(1)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
export default SavedGigs;
