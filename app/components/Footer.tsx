import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} TechFreelancer. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

