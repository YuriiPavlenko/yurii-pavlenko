import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Startup",
    content: "Working with this freelancer was a game-changer for our startup. Their expertise and dedication helped us launch our product on time and within budget.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Jane Smith",
    company: "E-commerce Giant",
    content: "The mobile app developed by this freelancer has significantly increased our customer engagement and sales. Highly recommended!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Mike Johnson",
    company: "Tech Consultancy",
    content: "Their strategic insights have been invaluable to our business. They have a unique ability to translate complex tech concepts into actionable business strategies.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                <div className="flex items-center">
                  <Avatar className="mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

