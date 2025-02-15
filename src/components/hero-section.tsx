import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useState } from 'react';

export default function Page() {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ]

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="flex flex-col md:flex-row mb-12 bg-background">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r px-4 py-6">
        <nav className="space-y-2">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-accent"
            >
              {category}
              <ChevronRight className="h-4 w-4" />
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="relative h-[30vh] md:h-[45vh] w-full bg-black">
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
            {[0, 1, 2, 3, 4].map((index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${activeSlide === index ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
