import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

const orderHistoryData = [
  {
    seller: "David Brown",
    date: "2023-05-15",
    amount: "$200",
    status: "Completed",
    review: "⭐⭐⭐⭐⭐",
  },
  {
    seller: "David Brown",
    date: "2023-05-15",
    amount: "$200",
    status: "Completed",
    review: "⭐⭐⭐⭐⭐",
  },
  {
    seller: "David Brown",
    date: "2023-05-15",
    amount: "$200",
    status: "Completed",
    review: "⭐⭐⭐⭐⭐",
  },
  {
    seller: "David Brown",
    date: "2023-05-15",
    amount: "$200",
    status: "Completed",
    review: "⭐⭐⭐⭐⭐",
  },
];

const OrderHistory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <Input placeholder="Search orders..." className="max-w-sm" />
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3">Seller</th>
                <th className="px-6 py-3">Order Date</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Review</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orderHistoryData.map((data) => (
                <tr key={data.seller}>
                  <td className="px-6 py-4 whitespace-nowrap">{data.seller}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{data.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{data.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant={
                        data.status === "Completed" ? "default" : "destructive"
                      }
                    >
                      {data.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{data.review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
export default OrderHistory;
