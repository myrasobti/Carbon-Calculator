import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { useLocation } from "wouter";

interface CalculatorData {
  electricbill: number;
  gasbill: number;
  oilbill: number;
  carmileage: number;
  shortflights: number;
  longflights: number;
  recyclenewspaper: boolean;
  recyclealuminum: boolean;
}

const questions = [
  {
    id: "electricbill",
    title: "Monthly Electric Bill",
    description: "Enter your average monthly electric bill in dollars",
    type: "number",
    placeholder: "e.g., 120",
    hint: "Did you know that the average household has $100-150/month?",
  },
  {
    id: "gasbill",
    title: "Monthly Gas Bill",
    description: "Enter your average monthly gas bill in dollars",
    type: "number",
    placeholder: "e.g., 80",
    hint: "Did you know that the average household: $50-100/month?",
  },
  {
    id: "oilbill",
    title: "Monthly Oil Bill",
    description:
      "Enter your average monthly oil bill in dollars (if applicable)",
    type: "number",
    placeholder: "e.g., 0",
    hint: "Enter 0 if you don't use oil heating",
  },
  {
    id: "carmileage",
    title: "Annual Car Mileage",
    description: "Total miles driven per year across all vehicles",
    type: "number",
    placeholder: "e.g., 12000",
    hint: "Did you know that the average American has 10,000-15,000 miles/year?",
  },
  {
    id: "shortflights",
    title: "Short Flights (≤4 hours)",
    description: "Number of flights 4 hours or less in the past year",
    type: "number",
    placeholder: "e.g., 2",
    hint: "Domestic flights and regional travel",
  },
  {
    id: "longflights",
    title: "Long Flights (>4 hours)",
    description: "Number of flights over 4 hours in the past year",
    type: "number",
    placeholder: "e.g., 1",
    hint: "International flights!",
  },
  {
    id: "recyclenewspaper",
    title: "Newspaper Recycling",
    description: "Do you recycle newspapers and paper products?",
    type: "boolean",
  },
  {
    id: "recyclealuminum",
    title: "Aluminum & Tin Recycling",
    description: "Do you recycle aluminum cans and tin containers?",
    type: "boolean",
  },
];

export default function Calculator() {
  const [, navigate] = useLocation();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CalculatorData>({
    electricbill: 0,
    gasbill: 0,
    oilbill: 0,
    carmileage: 0,
    shortflights: 0,
    longflights: 0,
    recyclenewspaper: false,
    recyclealuminum: false,
  });
  const [isCalculating, setIsCalculating] = useState(false);

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  const calculateFootprint = () => {
    const totalfootprint =
      data.electricbill * 105 +
      data.gasbill * 105 +
      data.oilbill * 113 +
      data.carmileage * 0.79 +
      data.shortflights * 1100 +
      data.longflights * 4400 +
      (!data.recyclenewspaper ? 184 : 0) +
      (!data.recyclealuminum ? 166 : 0);

    return totalfootprint;
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsCalculating(true);
      const totalfootprint = calculateFootprint();

      const result = {
        ...data,
        totalfootprint,
      };
      sessionStorage.setItem("carbonCalculation", JSON.stringify(result));

      setTimeout(() => {
        navigate("/results");
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleInputChange = (value: number | boolean) => {
    setData({
      ...data,
      [currentQuestion.id]: value,
    });
  };

  const isValid = () => {
    if (currentQuestion.type === "number") {
      const value = data[currentQuestion.id as keyof CalculatorData];
      return typeof value === "number" && !isNaN(value) && value >= 0;
    }
    return true;
  };

  const hasValue = () => {
    if (currentQuestion.type === "number") {
      const value = data[currentQuestion.id as keyof CalculatorData];
      return typeof value === "number" && !isNaN(value);
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Carbon Footprint Calculator
          </h1>
          <p className="text-muted-foreground">
            Step {step + 1} of {questions.length}
          </p>
        </div>

        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="p-8 md:p-12">
          <div className="mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              {currentQuestion.title}
            </h2>
            <p className="text-muted-foreground">
              {currentQuestion.description}
            </p>
          </div>

          <div className="mb-8">
            {currentQuestion.type === "number" ? (
              <div className="space-y-4">
                <Label htmlFor={currentQuestion.id} className="text-base">
                  Amount
                </Label>
                <Input
                  id={currentQuestion.id}
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder={currentQuestion.placeholder}
                  value={
                    data[currentQuestion.id as keyof CalculatorData] as number
                  }
                  onChange={(e) => {
                    const val =
                      e.target.value === "" ? NaN : parseFloat(e.target.value);
                    handleInputChange(val);
                  }}
                  className="text-lg h-14"
                  data-testid={`input-${currentQuestion.id}`}
                />
                {currentQuestion.hint && (
                  <p className="text-sm text-muted-foreground">
                    💡 {currentQuestion.hint}
                  </p>
                )}
                {!hasValue() && <p className="text-sm text-destructive"></p>}
              </div>
            ) : (
              <div className="flex items-center justify-between p-6 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <Label
                    htmlFor={currentQuestion.id}
                    className="text-base font-medium"
                  >
                    {data[currentQuestion.id as keyof CalculatorData]
                      ? "Yes, I recycle"
                      : "No, I don't recycle"}
                  </Label>
                </div>
                <Switch
                  id={currentQuestion.id}
                  checked={
                    data[currentQuestion.id as keyof CalculatorData] as boolean
                  }
                  onCheckedChange={handleInputChange}
                  data-testid={`switch-${currentQuestion.id}`}
                />
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrevious}
              disabled={step === 0}
              className="flex-1"
              data-testid="button-previous"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              size="lg"
              onClick={handleNext}
              disabled={!hasValue() || !isValid() || isCalculating}
              className="flex-1"
              data-testid="button-next"
            >
              {step === questions.length - 1 ? (
                isCalculating ? (
                  "Calculating..."
                ) : (
                  "Calculate"
                )
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </Card>

        <div className="flex justify-center gap-2 mt-8">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === step
                  ? "bg-primary w-8"
                  : index < step
                    ? "bg-primary/50"
                    : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
