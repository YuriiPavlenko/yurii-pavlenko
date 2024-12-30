import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Lightbulb } from 'lucide-react'

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications tailored to your needs.",
    icon: Code,
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Tech Consulting",
    description: "Strategic advice to help your business leverage technology effectively.",
    icon: Lightbulb,
  },
]

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

