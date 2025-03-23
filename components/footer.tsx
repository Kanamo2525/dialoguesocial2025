import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#000091] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">À propos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Notre mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  L'équipe
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ressources" className="text-white/80 hover:text-white transition-colors">
                  Guides pratiques
                </Link>
              </li>
              <li>
                <Link href="/ressources" className="text-white/80 hover:text-white transition-colors">
                  Études et rapports
                </Link>
              </li>
              <li>
                <Link href="/ressources" className="text-white/80 hover:text-white transition-colors">
                  Législation
                </Link>
              </li>
              <li>
                <Link href="/ressources" className="text-white/80 hover:text-white transition-colors">
                  Outils
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Événements</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/evenements" className="text-white/80 hover:text-white transition-colors">
                  Conférences
                </Link>
              </li>
              <li>
                <Link href="/evenements" className="text-white/80 hover:text-white transition-colors">
                  Webinaires
                </Link>
              </li>
              <li>
                <Link href="/evenements" className="text-white/80 hover:text-white transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/evenements" className="text-white/80 hover:text-white transition-colors">
                  Calendrier
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Nous écrire
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Presse
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative w-8 h-8 mr-2 flex items-center justify-center bg-white rounded-full">
                <MessageSquare className="w-4 h-4 text-[#000091]" />
              </div>
              <span className="font-bold">DialogueSocial2025</span>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center text-white/80 text-sm">
            <p>
              by{" "}
              <Link
                href="https://github.com/Kanamo2525"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline font-medium"
              >
                Kristy An
              </Link>{" "}
              is licensed under{" "}
              <Link
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline font-medium"
              >
                CC BY-NC-SA 4.0
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

