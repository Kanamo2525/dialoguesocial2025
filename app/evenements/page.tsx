import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, Filter } from "lucide-react"

const EVENT_IMAGES = [
  "photo-1511578314322-379afb476865",
  "photo-1505373877841-8d25f7d46678",
  "photo-1475721027785-f74eccf877e2",
  "photo-1540317580384-e5d43616b9aa",
  "photo-1558008258-3256797b43f3",
  "photo-1559223607-a43c990c692c",
]

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#000091] text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 mb-4">
              Événements
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Nos événements sur le dialogue social
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Participez à nos conférences, webinaires et formations pour approfondir vos connaissances et échanger avec
              des experts.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-[#000091]">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filtrer par :</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="rounded-full">
                Tous
              </Button>
              <Button variant="outline" className="rounded-full">
                Conférences
              </Button>
              <Button variant="outline" className="rounded-full">
                Webinaires
              </Button>
              <Button variant="outline" className="rounded-full">
                Formations
              </Button>
              <Button variant="outline" className="rounded-full">
                Tables rondes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
                  alt="Événement à la une"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E1000F] text-white mb-4">
                  Événement à la une
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#000091] mb-4">
                  Conférence nationale sur le dialogue social 2025
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-[#000091]" />
                    <span>15-16 juin 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-[#000091]" />
                    <span>Palais des Congrès, Paris</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-[#000091]" />
                    <span>9h00 - 18h00</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  La conférence annuelle de référence sur le dialogue social en France. Deux jours d'échanges, de débats
                  et d'ateliers avec les meilleurs experts et praticiens du domaine.
                </p>
                <Button asChild className="bg-[#000091] hover:bg-[#00006f]">
                  <Link href="#">S'inscrire à l'événement</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000091] mb-8">Événements à venir</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {EVENT_IMAGES.map((imageId, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&q=80`}
                    alt={`Événement ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 rounded-full text-sm font-medium bg-white text-[#000091]">
                      {i % 3 === 0 ? "Conférence" : i % 3 === 1 ? "Webinaire" : "Formation"}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#000091] mb-4">
                    {i % 3 === 0 ? "Conférence" : i % 3 === 1 ? "Webinaire" : "Formation"} : Le dialogue social à l'ère
                    numérique
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-[#000091]" />
                      <span>{`${10 + i} juin 2025`}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      {i % 3 !== 1 ? (
                        <>
                          <MapPin className="w-4 h-4 text-[#000091]" />
                          <span>Paris</span>
                        </>
                      ) : (
                        <>
                          <Users className="w-4 h-4 text-[#000091]" />
                          <span>En ligne</span>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="#">En savoir plus</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Download */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000091] mb-4">Ne manquez aucun événement</h2>
            <p className="text-lg text-gray-600 mb-8">
              Téléchargez notre calendrier d'événements pour l'ajouter à votre agenda ou inscrivez-vous à nos alertes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#000091] hover:bg-[#00006f]">
                <Link href="#">
                  <Calendar className="mr-2 h-4 w-4" />
                  Télécharger le calendrier
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#newsletter">S'inscrire aux alertes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

