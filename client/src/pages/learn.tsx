import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Leaf, Home, Globe, TreePine, Factory, Car } from "lucide-react";

export default function Learn() {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Globe className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Understanding Carbon Footprints
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn what a carbon footprint is and why reducing it matters for our planet
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">What is a Carbon Footprint?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A carbon footprint is the total amount of greenhouse gases (especially carbon dioxide) 
                  that are released into the atmosphere because of your activities. This includes everything 
                  from driving a car, heating your home, to the food you eat and products you buy.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">Main Sources of Carbon Emissions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Factory className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Energy Use</h3>
                <p className="text-sm text-muted-foreground">
                  Electricity and heating from fossil fuels in homes and buildings
                </p>
              </div>

              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Transportation</h3>
                <p className="text-sm text-muted-foreground">
                  Cars, planes, and other vehicles that burn gasoline or diesel
                </p>
              </div>

              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <TreePine className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Consumption</h3>
                <p className="text-sm text-muted-foreground">
                  Production and waste from food, clothing, and products we buy
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-10 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Why Should We Reduce It?</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Climate Change:</strong> High carbon emissions trap heat in the atmosphere, 
                  causing global temperatures to rise, leading to extreme weather, melting ice caps, and rising sea levels.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Protecting Nature:</strong> Reducing emissions helps protect ecosystems, 
                  wildlife, and natural resources that we depend on for survival.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Future Generations:</strong> By reducing our carbon footprint now, 
                  we help ensure a healthier, more sustainable planet for future generations.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Better Health:</strong> Lower emissions mean cleaner air, 
                  which reduces respiratory problems and improves overall public health.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4">What Can You Do?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every small action counts! Start by calculating your carbon footprint to understand your impact, 
              then make simple changes like using less energy, choosing sustainable transport, recycling, 
              and being mindful of what you buy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/tips">
                <Button size="lg" className="rounded-full" data-testid="button-calculate">
                  Find tips here
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="rounded-full" data-testid="button-home">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
