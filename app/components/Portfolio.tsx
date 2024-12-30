import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  { title: "E-commerce Platform", image: "/placeholder.svg?height=300&width=400" },
  { title: "Fitness Tracking App", image: "/placeholder.svg?height=300&width=400" },
  { title: "Real Estate Marketplace", image: "/placeholder.svg?height=300&width=400" },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

