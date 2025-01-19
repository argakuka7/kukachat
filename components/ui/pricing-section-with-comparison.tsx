import { Check, Minus, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NextLink from "next/link";

function Pricing() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Simple, transparent pricing
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Get started for free, upgrade when you need more features
            </p>
          </div>
          <div className="grid text-left w-full grid-cols-2 lg:grid-cols-3 divide-x pt-20">
            <div className="col-span-2 lg:col-span-1"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
              <p className="text-2xl">FREE</p>
              <p className="text-sm text-muted-foreground">
                Perfect for trying out KukaChat and personal use
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl">$0</span>
                <span className="text-sm text-muted-foreground"> / forever</span>
              </p>
              <Button variant="outline" asChild className="gap-4 mt-8">
                <NextLink href="#try-it">
                  Get Started <MoveRight className="w-4 h-4" />
                </NextLink>
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col relative">
              <div className="absolute -top-5 left-0 right-0 flex justify-center">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Popular</Badge>
              </div>
              <p className="text-2xl">PRO</p>
              <p className="text-sm text-muted-foreground">
                For power users who need advanced features and higher usage limits
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl">$10</span>
                <span className="text-sm text-muted-foreground"> / month</span>
              </p>
              <Button asChild className="gap-4 mt-8">
                <NextLink href="#try-it">
                  Upgrade Now <MoveRight className="w-4 h-4" />
                </NextLink>
              </Button>
            </div>
            <div className="px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">
              <b>Features</b>
            </div>
            <div></div>
            <div></div>
            <div className="px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">Messages per day</div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm">50 messages</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm">Unlimited</p>
            </div>
            <div className="px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">
              AI Models
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm">Basic models</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm">All models</p>
            </div>
            <div className="px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">Web Search</div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">
              Image Generation
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">
              Code Interpreter
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">
              Chat History
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm">7 days</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm">Unlimited</p>
            </div>
            <div className="px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">
              Priority Support
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing }; 