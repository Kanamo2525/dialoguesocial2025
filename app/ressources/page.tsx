import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, BookOpen, FileDown, Video, ExternalLink } from "lucide-react"

const RESOURCE_IMAGES = [
  "photo-1506784983877-45594efa4cbe",
  "photo-1454165804606-c3d57bc86b40",
  "photo-1517245386807-bb43f82c33c4",
  "photo-1552664730-d307ca884978",
  "photo-1556761175-4b46a572b786",
  "photo-1577962917302-cd874c4e31d2",
]

const VIDEO_IMAGES = [
  "photo-1591115765373-5207764f72e7",
  "photo-1612287230202-1ff1d85d1bdf",
  "photo-1505373877841-8d25f7d46678",
  "photo-1526041092096-479a11a2d61e",
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#000091] text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 mb-4">
              Centre de ressources
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ressources sur le dialogue social</h1>
            <p className="text-lg md:text-xl text-white/80">
              Accédez à nos guides, études, rapports et outils pour mieux comprendre et pratiquer le dialogue social.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 mb-8">
              <TabsTrigger value="guides">Guides pratiques</TabsTrigger>
              <TabsTrigger value="etudes">Études et rapports</TabsTrigger>
              <TabsTrigger value="outils">Outils</TabsTrigger>
              <TabsTrigger value="videos">Vidéos</TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {RESOURCE_IMAGES.map((imageId, i) => (
                  <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&q=80`}
                        alt={`Guide pratique ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <FileText className="w-4 h-4" />
                        <span>Guide pratique</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#000091] mb-2">
                        Guide du dialogue social en entreprise {i + 1}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Un guide complet pour comprendre et mettre en œuvre un dialogue social efficace dans votre
                        organisation.
                      </p>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">
                          <FileDown className="mr-2 h-4 w-4" />
                          Télécharger le PDF
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="etudes" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <BookOpen className="w-4 h-4" />
                        <span>Étude</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#000091] mb-2">
                        Étude sur l'évolution du dialogue social {i}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Une analyse approfondie des tendances et évolutions récentes du dialogue social en France.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="font-medium">Publication:</span>
                        <span className="ml-2">Janvier 2025</span>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">
                          <FileDown className="mr-2 h-4 w-4" />
                          Télécharger l'étude
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="outils" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <FileText className="w-4 h-4" />
                        <span>Outil</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#000091] mb-2">Outil d'aide à la négociation {i}</h3>
                      <p className="text-gray-600 mb-4">
                        Un outil pratique pour faciliter la préparation et le suivi de vos négociations collectives.
                      </p>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button asChild className="w-full bg-[#000091] hover:bg-[#00006f]">
                        <Link href="#">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Accéder à l'outil
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {VIDEO_IMAGES.map((imageId, i) => (
                  <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-64 bg-gray-100">
                      <Image
                        src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&q=80`}
                        alt={`Vidéo ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                          <Video className="w-8 h-8 text-[#000091]" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#000091] mb-2">
                        Webinaire : Les clés du dialogue social {i + 1}
                      </h3>
                      <p className="text-gray-600">
                        Un webinaire pour comprendre les fondamentaux du dialogue social et son évolution récente.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000091] mb-4">Recevez nos ressources par email</h2>
            <p className="text-lg text-gray-600 mb-8">
              Inscrivez-vous pour recevoir nos dernières publications, guides et invitations à nos événements.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#000091] flex-grow max-w-md"
                required
              />
              <Button className="bg-[#000091] hover:bg-[#00006f]">S'inscrire</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

