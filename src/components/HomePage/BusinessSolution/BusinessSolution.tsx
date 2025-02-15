import { Check } from "lucide-react";

const businessData = [
  {
    title: "Scaling Made Easy",
    description:
      "Find professional talent to boost your conversion, sales, and traffic.",
  },
  {
    title: "Outsource & Save (up to 87%!)",
    description:
      "Dramatically reduce your expenses with fixed-price freelance services for every budget.",
  },
  {
    title: "Focus on Priorities",
    description:
      "Spend up to 75% less time on business tasks and focus on what really matters for growth.",
  },
  {
    title: "Flexible Solutions",
    description:
      "Customize your business strategy with adaptable solutions tailored to your unique needs.",
  },
];

export default function BusinessSolution() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4  mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 justify-center items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Intelligent business solutions for entrepreneurs
            </h2>
            <div className="space-y-6">
              {businessData.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/rVNcbxvgHEM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
