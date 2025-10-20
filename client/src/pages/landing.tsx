import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Calculator } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Landing() {
  const [, setLocation] = useLocation();

  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started-section');
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const scrollToTips = () => {
    const element = document.getElementById('tips');
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const goToLearn = () => {
    setLocation('/learn');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div id="get-started-section" className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-primary/10 rounded-full">
              <Leaf className="w-16 h-16 text-primary" />
            </div>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Calculate Your Carbon Footprint
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Answer 8 simple questions to discover your environmental impact and
            learn how to reduce it.
          </p>

          <Link href="/calculator">
            <Button
              size="lg"
              className="rounded-full px-8 text-lg"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <div className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card 
              className="p-6 text-center hover-elevate active-elevate-2 transition-shadow cursor-pointer"
              onClick={scrollToGetStarted}
              data-testid="card-step-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Answer Questions
              </h3>
              <p className="text-muted-foreground">
              Answer a few questions about your lifestyle to calculate your carbon footprint and discover what impacts it the most.</p>
            </Card>

            <Card 
              className="p-6 text-center hover-elevate active-elevate-2 transition-shadow cursor-pointer"
              onClick={scrollToTips}
              data-testid="card-step-2"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Tips + Products
              </h3>
              <p className="text-muted-foreground">
                Find tips and sustainable products you can use to reduce your carbon footprint
              </p>
            </Card>

            <Card 
              className="p-6 text-center hover-elevate active-elevate-2 transition-shadow cursor-pointer"
              onClick={goToLearn}
              data-testid="card-step-3"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Understand Emissions
              </h3>
              <p className="text-muted-foreground">
                Understand what a Carbon Footprint is and why it is important to reduce it.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Are you ready to make a difference?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Find tips here to reduce your carbon footprint and help the
            environment!
          </p>
          <Link href="/tips">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-8"
              data-testid="button-cta-start"
            >
              Click Here
            </Button>
          </Link>
        </div>
      </div>

      <div id="tips" className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold mb-8">
            Shop Sustainable Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Reusable Water Bottle", link: "https://www.amazon.com/AmazonBasics-Stainless-Steel-Insulated-Bottle/dp/B081BM2VKQ" },
              { name: "Eco-Friendly Grocery Bags", link: "https://www.amazon.com/Pack-Reusable-Grocery-Shopping-Eco-Friendly/dp/B08FRS523V" },
              { name: "Bamboo Toothbrushes", link: "https://www.amazon.com/VIVAGO-Biodegradable-Eco-Friendly-Toothbrushes-Compostable/dp/B08172V3Y5" },
              { name: "Compost Bin for Kitchen Counter", link: "https://www.amazon.com/AIRNEX-Collapsible-Countertop-Compost-Bin/dp/B0B9H2FSB5" },
              { name: "Reusable Coffee Cup", link: "https://www.amazon.com/Domensi-Reusable-Coffee-Plastic-Tumblers/dp/B0CNT5KYD1" },
              { name: "Zero-Waste Shampoo Bars", link: "https://www.amazon.com/ZWS-Essentials-Unscented-Fragrance-Free-Travel-Friendly/dp/B0FHLPH2CX" },
              { name: "Reusable Paper Towels", link: "https://www.amazon.com/Reusable-Paper-Towels-Paperless-ZeroWastely/dp/B0BFB8T4XV" },
              { name: "Natural Refillable Cleaning Spray Bottles", link: "https://www.amazon.com/LiBa-Refillable-Cleaning-Essential-Adjustable/dp/B08B3C2PM3" },
             
              
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">Shop now on Amazon →</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
