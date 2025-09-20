"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

// Placeholder image URLs - replace with your actual image paths
const IMAGE_BASE_URL = "/placeholder.svg"

const mainPartnersData = [
  {
    id: 1,
    name: "SUCURI",
    imageUrl: "/images/success-part-1.svg",
    description: "تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة. تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة تحدث عن الشركة المذكورة تحدث عن الشركة"
  },
  {
    id: 2,
    name: "SUCURI",
    imageUrl: "/images/success-part-2.svg",
    description: "تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة. تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة تحدث عن الشركة المذكورة تحدث عن الشركة"
  },
  {
    id: 3,
    name: "SUCURI",
    imageUrl: "/images/success-part-3.svg",
    description: "تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة. تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة تحدث عن الشركة المذكورة تحدث عن الشركة"
  },
   {
    id: 4,
    name: "SUCURI",
    imageUrl: "/images/success-part-1.svg",
    description: "تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة. تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة تحدث عن الشركة المذكورة تحدث عن الشركة"
  },
  {
    id: 5,
    name: "SUCURI",
    imageUrl: "/images/success-part-2.svg",
    description: "تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة. تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة تحدث عن الشركة المذكورة تحدث عن الشركة"
  },
  {
    id: 6,
    name: "SUCURI",
    imageUrl: "/images/success-part-3.svg",
    description: "تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة. تحدث عن الشركة المذكورة تحدث عن الشركة المذكورة تحدث عن الشركة تحدث عن الشركة المذكورة تحدث عن الشركة"
  },
]

const SuccessPartners = () => {
  return (
    <section className="sm:py-32 py-16 px-4 max-w-7xl mx-auto bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">شركاء النجاح</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Top 3 main partners */}
        {mainPartnersData.map((partner, index) => {
          return (
            <motion.div
              className=""
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <Card
                key={partner.id}
                className="group hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white"
              >
                <CardContent className="px-8">
                    <div className="w-44 h-44 mx-auto">
                      <img
                        width={70}
                        height={70}
                        src={partner.imageUrl || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        className="w-full h-full"
                      />
                  </div>
                  <h3 className="text-xl font-semibold border-b-2 border-black inline ">{partner.name}</h3>
                  <p className="text-sm mt-6 leading-relaxed">{partner.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default SuccessPartners
