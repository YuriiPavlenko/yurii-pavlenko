'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          TechFreelancer
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLinks />
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4 bg-background">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  )
}

const NavLinks = () => (
  <>
    <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
      Services
    </Link>
    <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
      About
    </Link>
    <Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
      Portfolio
    </Link>
    <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
      Testimonials
    </Link>
    <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
      Contact
    </Link>
  </>
)

export default Header

