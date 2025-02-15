import { Heart, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import 'react-animated-slider/build/horizontal.css';
import img1 from "@/assets/images/img1.jpg"
import img2 from "@/assets/images/img2.jpg"
import img3 from "@/assets/images/img3.jpg"
import img4 from "@/assets/images/img4.jpg"
import img5 from "@/assets/images/img5.jpg"
import img6 from "@/assets/images/imd6.jpg"
import img7 from "@/assets/images/img7.jpg"
import Slider from 'react-animated-slider';
import { differenceInSeconds, formatDuration, intervalToDuration } from "date-fns"

const images = [img1, img2, img3, img4, img5, img6, img7]

const categories = [
  { name: "Phones", icon: <Smartphone className="h-6 w-6" /> },
  { name: "Computers", icon: <Monitor className="h-6 w-6" /> },
  { name: "Smartwatch", icon: <Watch className="h-6 w-6" /> },
  { name: "Camera", icon: <Camera className="h-6 w-6" /> },
  { name: "Headphones", icon: <Headphones className="h-6 w-6" /> },
  { name: "Gaming", icon: <Gamepad className="h-6 w-6" /> },
]

const bestSellingProducts = [
  { name: "Phone X", imageSrc: "/images/phone-x.jpg" },
  { name: "Ultra Monitor", imageSrc: "/images/ultra-monitor.jpg" },
  { name: "Smartwatch Pro", imageSrc: "/images/smartwatch-pro.jpg" },
  { name: "Pro Camera", imageSrc: "/images/pro-camera.jpg" },
  { name: "Noise Cancelling Headphones", imageSrc: "/images/noise-cancelling-headphones.jpg" },
  { name: "Gaming Console", imageSrc: "/images/gaming-console.jpg" },
]

export default function FlashSales() {
  const [flashSaleIndex, setFlashSaleIndex] = useState(0)
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [bestSellingIndex, setBestSellingIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const handleFlashSalePrev = () => {
    setFlashSaleIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const handleFlashSaleNext = () => {
    setFlashSaleIndex((prevIndex) => Math.min(prevIndex + 1, 9))
  }

  const handleCategoryPrev = () => {
    setCategoryIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const handleCategoryNext = () => {
    setCategoryIndex((prevIndex) => Math.min(prevIndex + 1, categories.length - 1))
  }

  const handleBestSellingPrev = () => {
    setBestSellingIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const handleBestSellingNext = () => {
    setBestSellingIndex((prevIndex) => Math.min(prevIndex + 1, bestSellingProducts.length - 1))
  }

  useEffect(() => {
    const endDate = new Date('2025-03-01T23:59:59');
    const updateCountdown = () => {
      const now = new Date();
      const secondsLeft = differenceInSeconds(endDate, now);
      const duration = intervalToDuration({ start: 0, end: secondsLeft * 1000 });
      
      setTimeLeft({
        days: duration.days || 0,
        hours: duration.hours || 0,
        minutes: duration.minutes || 0,
        seconds: duration.seconds || 0
      });
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Flash Sales Section */}
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-1 h-6 bg-red-500 rounded"></div>
              <h2 className="text-sm font-medium text-red-500">Today's</h2>
            </div>
            <h3 className="text-2xl font-bold">Flash Sales</h3>
          </div>
          <div className="flex gap-4 text-xl font-semibold mt-4 md:mt-0">
            <div className="text-center">
              <span id="days">{timeLeft.days.toString().padStart(2, '0')}</span>
              <p className="text-xs text-muted-foreground">Days</p>
            </div>
            <span>:</span>
            <div className="text-center">
              <span id="hours">{timeLeft.hours.toString().padStart(2, '0')}</span>
              <p className="text-xs text-muted-foreground">Hours</p>
            </div>
            <span>:</span>
            <div className="text-center">
              <span id="minutes">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <p className="text-xs text-muted-foreground">Minutes</p>
            </div>
            <span>:</span>
            <div className="text-center">
              <span id="seconds">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <p className="text-xs text-muted-foreground">Seconds</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="icon" onClick={handleFlashSalePrev}>
              <span className="sr-only">Previous items</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleFlashSaleNext}>
              <span className="sr-only">Next items</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Array.from({ length: 10 }, (_, i) => i + 1)
            .slice(flashSaleIndex, flashSaleIndex + 5)
            .map((productNumber) => (
              <Card key={productNumber} className="relative">
                <CardContent className="p-4">
                  <div className="absolute top-2 left-2 z-10">
                    <span className="px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded">
                      {`-${productNumber * 10}%`}
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-10">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <div className="relative aspect-square mb-3">
                    <img src={images[Math.floor(Math.random() * images.length)]} alt={`Product ${productNumber}`} className="w-full h-full object-cover rounded" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm">Product {productNumber}</h3>
                    <div className="flex gap-2">
                      <span className="text-red-500 font-semibold">${productNumber * 100}</span>
                      <span className="text-muted-foreground line-through">${(productNumber + 1) * 100}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground">(88)</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full" variant="outline">
                    Add To Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="default" className="bg-red-500 hover:bg-red-600">
            View All Products
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-1 h-6 bg-red-500 rounded"></div>
              <h2 className="text-sm font-medium text-red-500">Categories</h2>
            </div>
            <h3 className="text-2xl font-bold">Browse By Category</h3>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="icon" onClick={handleCategoryPrev}>
              <span className="sr-only">Previous categories</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleCategoryNext}>
              <span className="sr-only">Next categories</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories
            .slice(categoryIndex, categoryIndex + 6)
            .map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="h-auto py-8 flex flex-col gap-2 transition-transform duration-300 hover:scale-105"
              >
                {category.icon}
                <span className="text-sm font-medium">{category.name}</span>
              </Button>
            ))}
        </div>
      </section>

      {/* Best Selling Products This Month Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-1 h-4 bg-red-500 rounded"></div>
              <h2 className="text-sm font-medium text-red-500">Best Selling</h2>
            </div>
            <h3 className="text-xl font-bold">Best Selling Products This Month</h3>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <Button variant="outline" size="icon" onClick={handleBestSellingPrev}>
              <span className="sr-only">Previous best sellers</span>
              <ChevronLeft className="h-3 w-3" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleBestSellingNext}>
              <span className="sr-only">Next best sellers</span>
              <ChevronRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-transform duration-500 ease-in-out"
               style={{transform: `translateX(-${bestSellingIndex * 100}%)`}}>
            {bestSellingProducts.slice(bestSellingIndex, bestSellingIndex + 3).map((product) => (
              <div key={product.name} className="flex-none w-full">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  <img 
                    src={img1} 
                    alt={product.name} 
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                  <span className="text-sm font-medium mt-3 text-center">{product.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-1 h-6 bg-red-500 rounded"></div>
              <h2 className="text-sm font-medium text-red-500">New Arrivals</h2>
            </div>
            <h3 className="text-2xl font-bold">Check Out Our Latest Products</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <img 
              src={img7}
              alt="New Arrival 1" 
              className="w-full h-auto rounded transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-4">
            <img 
              src={img4} 
              alt="New Arrival 2" 
              className="w-full h-auto rounded transition-transform duration-300 hover:scale-105"
            />
            <img 
              src={images[Math.floor(Math.random() * images.length)]} 
              alt="New Arrival 3" 
              className="w-full h-auto rounded transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
