import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Transforming Ideas into <span className="text-primary">Digital Reality</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up animate-delay-150">
          Expert freelance services in web development, app creation, and tech consulting.
        </p>
        <Button size="lg" className="animate-fade-up animate-delay-300">
          Get Started <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>
    </section>
  )
}

export default Hero

