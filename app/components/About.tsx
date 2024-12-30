import Image from 'next/image'
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Tech Entrepreneur"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over a decade of experience in the tech industry, I've helped numerous startups and established companies bring their digital visions to life. My expertise spans across web development, mobile app creation, and strategic tech consulting.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              I'm passionate about leveraging cutting-edge technologies to solve complex problems and create user-friendly digital experiences that drive business growth.
            </p>
            <Button variant="outline">Download Resume</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

