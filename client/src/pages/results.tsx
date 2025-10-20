import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, Calculator, Home } from "lucide-react";

interface CalculationResult {
  electricbill: number;
  gasbill: number;
  oilbill: number;
  carmileage: number;
  shortflights: number;
  longflights: number;
  recyclenewspaper: boolean;
  recyclealuminum: boolean;
  totalfootprint: number;
}

export default function Results() {
  const [, navigate] = useLocation();

  const storedData = sessionStorage.getItem("carbonCalculation");
  const calculation: CalculationResult | null = storedData
    ? JSON.parse(storedData)
    : null;

  if (!calculation) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <Card className="p-8 max-w-md text-center">
          <p className="text-muted-foreground mb-4">
            No calculation data found
          </p>
          <Button
            onClick={() => navigate("/calculator")}
            data-testid="button-back-calculator"
          >
            Start New Calculation
          </Button>
        </Card>
      </div>
    );
  }

  const getCategory = (footprint: number) => {
    if (footprint < 6000)
      return {
        name: "Very Low",
        color: "text-chart-2",
        bg: "bg-chart-2/10",
        description: "Well done! You're footprint is very low :)",
      };
    if (footprint < 16000)
      return {
        name: "Ideal",
        color: "text-primary",
        bg: "bg-primary/10",
        description: "Good job! You're within the ideal range.",
      };
    if (footprint < 22000)
      return {
        name: "Average",
        color: "text-chart-4",
        bg: "bg-chart-4/10",
        description: "You're at the average level.",
      };
    return {
      name: "High",
      color: "text-destructive",
      bg: "bg-destructive/10",
      description:
        "You're footprint is very high... but there's room for improvement.",
    };
  };

  const category = getCategory(calculation.totalfootprint);

  const breakdown = [
    { label: "Electricity", value: calculation.electricbill * 105, icon: "⚡" },
    { label: "Gas", value: calculation.gasbill * 105, icon: "🔥" },
    { label: "Oil", value: calculation.oilbill * 113, icon: "🛢️" },
    { label: "Car", value: calculation.carmileage * 0.79, icon: "🚗" },
    {
      label: "Short Flights",
      value: calculation.shortflights * 1100,
      icon: "✈️",
    },
    {
      label: "Long Flights",
      value: calculation.longflights * 4400,
      icon: "🛫",
    },
    {
      label: "Not Recycling",
      value:
        (!calculation.recyclenewspaper ? 184 : 0) +
        (!calculation.recyclealuminum ? 166 : 0),
      icon: "♻️",
    },
  ].filter((item) => item.value > 0);

  const maxValue = Math.max(...breakdown.map((b) => b.value));

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Leaf className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Your Carbon Footprint
          </h1>
          <p className="text-muted-foreground">
            Here's your environmental impact breakdown
          </p>
        </div>

        <Card className="p-8 md:p-12 mb-8 text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${category.bg} mb-6`}
          >
            <div
              className={`w-2 h-2 rounded-full ${category.color.replace("text-", "bg-")}`}
            />
            <span className={`font-semibold ${category.color}`}>
              {category.name}
            </span>
          </div>

          <div className="mb-4">
            <div
              className="font-mono text-6xl md:text-7xl font-bold text-foreground"
              data-testid="text-total-footprint"
            >
              {Math.round(calculation.totalfootprint).toLocaleString()}
            </div>
            <div className="text-lg text-muted-foreground mt-2">
              pounds of CO₂ per year
            </div>
          </div>

          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            {category.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Very Low</div>
              <div className="font-semibold text-chart-2">{"<6,000"}</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Ideal</div>
              <div className="font-semibold text-primary">6K-16K</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Average</div>
              <div className="font-semibold text-chart-4">16K-22K</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">High</div>
              <div className="font-semibold text-destructive">{">22,000"}</div>
            </div>
          </div>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="font-heading text-2xl font-bold mb-6">
            What Contributed to Your Score
          </h2>
          <div className="space-y-4">
            {breakdown.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <span className="font-mono font-semibold">
                    {Math.round(item.value).toLocaleString()} lbs
                  </span>
                </div>
                <Progress
                  value={(item.value / maxValue) * 100}
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </Card>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            onClick={() => navigate("/calculator")}
            data-testid="button-calculate-again"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Calculate Again
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/")}
            data-testid="button-return-home"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
