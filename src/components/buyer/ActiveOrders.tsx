import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const activeOrderData = [
  {
    sellerName: "Alice Smith",
    gigTitle: "Logo Design",
    price: "$150",
    eta: "2 days",
    status: "In Progress",
  },
  {
    sellerName: "Alice Smith",
    gigTitle: "Logo Design",
    price: "$150",
    eta: "2 days",
    status: "In Progress",
  },
  {
    sellerName: "Alice Smith",
    gigTitle: "Logo Design",
    price: "$150",
    eta: "2 days",
    status: "In Progress",
  },
];

const ActiveOrders = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activeOrderData.map((data) => (
            <div
              key={data.gigTitle}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
            >
              <div>
                <h3 className="font-semibold">{data.gigTitle}</h3>
                <p className="text-sm text-gray-500">{data.sellerName}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{data.price}</p>
                <p className="text-sm text-gray-500">ETA: {data.eta}</p>
              </div>
              <Badge
                variant={
                  data.status === "In Progress"
                    ? "default"
                    : data.status === "Revisions"
                    ? "secondary"
                    : "outline"
                }
              >
                {data.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
export default ActiveOrders;
