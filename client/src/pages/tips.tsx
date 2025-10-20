import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Leaf, Home } from "lucide-react";

export default function Tips() {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Tips
          </h1>
          <p className="text-muted-foreground">
            These are small steps you can take to reduce your carbon footprint
          </p>
        </div>

        <Card className="p-8 md:p-12 space-y-6">
          <h2 className="text-2xl font-bold">Tip 1: Reduce Energy Use</h2>
          <p>Turn off lights when not in use, unplug devices, and use energy-efficient bulbs.</p>

          <h2 className="text-2xl font-bold">Tip 2: Travel Smarter</h2>
          <p>Walk, cycle, or use public transport when possible instead of driving.</p>

          <h2 className="text-2xl font-bold">Tip 3: Recycle</h2>
          <p>Recycle paper, aluminum, and other materials to reduce waste.</p>
          <h2 className="text-2xl font-bold">Tip 4: Food choices</h2>  
          <p> Choose foods that are naturally lower in emissions, such as plantbased proteins like pulses and leafy greens, and sustainably produced animal products like mussels</p>


          <Link href="/">
            <Button variant="outline" className="mt-4">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
