import { Check, TrendingUp, Users, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const businessData = [
  {
    title: "Scale Your Business",
    description: "Find professional talent to boost your growth.",
  },
  {
    title: "Save Up to 87%",
    description: "Reduce expenses with fixed-price services.",
  },
  {
    title: "Focus on Growth",
    description: "Spend less time on tasks, more on priorities.",
  },
];

export default function BusinessSolution() {
  return (
    <section className="w-full py-16">
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Smart business solutions for{" "}
                <span className="text-primary">entrepreneurs</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Transform your business with professional services designed for
                growth.
              </p>
            </div>

            <div className="space-y-4">
              {businessData.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-6">
            <Card className="text-center p-8">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <p className="text-muted-foreground">Businesses Served</p>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">98%</div>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </Card>

              <Card className="text-center p-6">
                <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">87%</div>
                <p className="text-sm text-muted-foreground">Cost Savings</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
