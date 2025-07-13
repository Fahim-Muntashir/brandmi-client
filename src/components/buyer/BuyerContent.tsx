import BuyerOverview from "./BuyerOverview";
import ActiveOrders from "./ActiveOrders";
import OrderHistory from "./OrderHistory";
import SavedGigs from "./SavedGigs";

const BuyerContent = () => {
  return (
    <section className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}

      {/* Dashboard Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-6">
          {/* Dashboard Overview */}
          <BuyerOverview />

          {/* Active Orders */}
          <ActiveOrders />

          {/* Order History & Completed Orders */}
          <OrderHistory />

          {/* Saved Gigs & Sellers */}
          <SavedGigs />

          {/* Reviews Given */}
          {/* <Card>
            <CardHeader>
              <CardTitle>Reviews Given</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ReviewCard
                  sellerName="Karen White"
                  rating={5}
                  comment="Excellent work! Delivered the project ahead of schedule and exceeded my expectations."
                  date="2023-05-20"
                />
                <ReviewCard
                  sellerName="Liam Anderson"
                  rating={4}
                  comment="Good communication and quality work. Minor revisions were needed but overall satisfied."
                  date="2023-05-15"
                />
                <ReviewCard
                  sellerName="Mia Garcia"
                  rating={5}
                  comment="Outstanding service! Mia was very professional and delivered high-quality work."
                  date="2023-05-10"
                />
              </div>
            </CardContent>
          </Card> */}

          {/* Support & Help Center */}
          {/* <Card>
            <CardHeader>
              <CardTitle>Support & Help Center</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2"
                >
                  <HelpCircle className="h-4 w-4" />
                  FAQs
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Dispute Resolution
                </Button>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </main>
    </section>
  );
};
export default BuyerContent;
