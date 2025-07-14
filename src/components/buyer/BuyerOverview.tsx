import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

const buyerOverviewData = [
  {
    title: "Total orders ",
    value: "47",
  },
  {
    title: "Complete Orders ",
    value: "39",
  },
  {
    title: "Hire Rate",
    value: "83%",
  },
  {
    title: "AVG. Order Value",
    value: "$125",
  },
];
const BuyerOverview = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
        {buyerOverviewData.map((data) => (
          <Card key={data.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {data.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <br />
      <Card>
        <CardHeader>
          <CardTitle>Spending Limit</CardTitle>
        </CardHeader>
        <br />
        <CardContent>
          <Progress value={65} className="w-full" />
          <p className="text-sm text-gray-500 mt-2">
            $650 of $1000 monthly limit used
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
export default BuyerOverview;
