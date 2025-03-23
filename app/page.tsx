import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Leaf, Scale, Users, Building, Landmark } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#000091] text-white py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Comprendre les défis du dialogue social en 2025
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Décryptage des enjeux, acteurs et innovations qui façonnent les relations professionnelles en France
                aujourd'hui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#E1000F] hover:bg-[#ce0000] text-white border-0">
                  <Link href="#enjeux">Explorer les enjeux</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  <Link href="/ressources">Centre de ressources</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Dialogue social en France"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enjeux Section */}
      <section id="enjeux" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#000091] text-white mb-4">
              Les grands enjeux
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000091] mb-4">Les grands enjeux actuels</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Le dialogue social en France fait face à des transformations profondes liées aux évolutions du monde du
              travail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#000091]/10 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-[#000091]" />
                </div>
                <h3 className="text-xl font-bold text-[#000091] mb-3">Digitalisation du travail</h3>
                <p className="text-gray-600">
                  L'essor du télétravail et des outils numériques transforme fondamentalement les modes de négociation
                  collective et le fonctionnement des instances représentatives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#000091]/10 flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6 text-[#000091]" />
                </div>
                <h3 className="text-xl font-bold text-[#000091] mb-3">Transition écologique</h3>
                <p className="text-gray-600">
                  Les enjeux environnementaux s'invitent dans le dialogue social avec la nécessité d'accompagner les
                  transitions professionnelles vers une économie décarbonée.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#000091]/10 flex items-center justify-center mb-6">
                  <Scale className="w-6 h-6 text-[#000091]" />
                </div>
                <h3 className="text-xl font-bold text-[#000091] mb-3">Nouvelles formes d'emploi</h3>
                <p className="text-gray-600">
                  Travailleurs des plateformes, freelances, multi-employeurs : comment adapter le dialogue social à ces
                  nouveaux statuts qui échappent au cadre traditionnel ?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Acteurs Section */}
      <section id="acteurs" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#000091] text-white mb-4">
              Les acteurs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000091] mb-4">Les acteurs du dialogue social</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprendre les rôles et responsabilités de chacun dans la construction d'un dialogue social efficace et
              constructif.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#000091]/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#000091]" />
                </div>
                <h3 className="text-xl font-bold text-[#000091] mb-3">Organisations syndicales</h3>
                <p className="text-gray-600">
                  Face à la baisse du taux de syndicalisation, les syndicats réinventent leur présence et leurs moyens
                  d'action pour maintenir leur légitimité dans le dialogue social.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#000091]/10 flex items-center justify-center mb-6">
                  <Building className="w-6 h-6 text-[#000091]" />
                </div>
                <h3 className="text-xl font-bold text-[#000091] mb-3">Employeurs et leurs représentants</h3>
                <p className="text-gray-600">
                  Entre compétitivité économique et responsabilité sociale, les entreprises cherchent un équilibre dans
                  un contexte de transformations rapides.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#000091]/10 flex items-center justify-center mb-6">
                  <Landmark className="w-6 h-6 text-[#000091]" />
                </div>
                <h3 className="text-xl font-bold text-[#000091] mb-3">Institutions et pouvoirs publics</h3>
                <p className="text-gray-600">
                  L'État joue un rôle clé dans la régulation du dialogue social, entre cadrage législatif et incitations
                  à la négociation décentralisée.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#000091] text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Restez informé sur le dialogue social</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter mensuelle pour recevoir nos analyses, décryptages et invitations à nos
              événements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-[#000091] hover:bg-gray-100 border-0">
                <Link href="#newsletter">S'inscrire à la newsletter</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link href="/evenements">Voir nos événements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

