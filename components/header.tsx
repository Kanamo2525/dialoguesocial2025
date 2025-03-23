"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 flex items-center justify-center bg-[#000091] rounded-full">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-[#000091]">DialogueSocial2025</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#000091] font-medium">
              Accueil
            </Link>
            <Link href="/#enjeux" className="text-gray-700 hover:text-[#000091] font-medium">
              Enjeux
            </Link>
            <Link href="/#acteurs" className="text-gray-700 hover:text-[#000091] font-medium">
              Acteurs
            </Link>
            <Link href="/ressources" className="text-gray-700 hover:text-[#000091] font-medium">
              Ressources
            </Link>
            <Link href="/evenements" className="text-gray-700 hover:text-[#000091] font-medium">
              Événements
            </Link>
            <Button asChild className="bg-[#000091] hover:bg-[#00006f]">
              <Link href="#contact">Contact</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#000091] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/#enjeux"
                className="text-gray-700 hover:text-[#000091] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Enjeux
              </Link>
              <Link
                href="/#acteurs"
                className="text-gray-700 hover:text-[#000091] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Acteurs
              </Link>
              <Link
                href="/ressources"
                className="text-gray-700 hover:text-[#000091] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ressources
              </Link>
              <Link
                href="/evenements"
                className="text-gray-700 hover:text-[#000091] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Événements
              </Link>
              <Button asChild className="bg-[#000091] hover:bg-[#00006f] w-full" onClick={() => setIsMenuOpen(false)}>
                <Link href="#contact">Contact</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

