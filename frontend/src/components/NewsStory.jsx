import React, { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Users, TrendingDown, ArrowDown } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import InteractiveMap from './InteractiveMap';
import Timeline from './Timeline';
import CalloutBox from './CalloutBox';
import ScrollReveal from './ScrollReveal';
import ParallaxSection from './ParallaxSection';
import { fraudIncidents, adviceBoxes, protectionSteps } from '../data/mockData';

const NewsStory = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    document.getElementById('story-content').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <ParallaxSection speed={0.3} className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-slate-200/20 to-slate-300/30" />
        </ParallaxSection>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span>SPESIAL GRAVESAK</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Falske kommuneansatte
              <br />
              <span className="text-red-600">lurer eldre for millioner</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Svindlere utgir seg for å være fra kommunen og krever penger av eldre innbyggere i Østfold og Lillestrøm. 
              Minst fire tilfeller er anmeldt bare de siste månedene.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-sm text-gray-500">
                Publisert 15. juli 2024 • Oppdatert 16. juli 2024
              </div>
            </div>
          </ScrollReveal>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-gray-600" />
        </button>
      </section>

      {/* Main Content */}
      <div id="story-content" className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Introduction */}
        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl leading-relaxed text-gray-700 font-medium">
              En 78 år gammel kvinne i Sarpsborg åpnet døra da to menn i arbeidsklær sto utenfor. 
              De sa de var fra kommunen og måtte sjekke vannledningene. Kort tid senere var hun 45 000 kroner fattigere.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 mt-6">
              Dette er bare ett av flere tilfeller der eldre personer i Østfold og Lillestrøm har blitt lurt av svindlere 
              som utgir seg for å være kommuneansatte. Politiet advarer nå mot en økende trend.
            </p>
          </div>
        </ScrollReveal>

        {/* Statistics Cards */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">124 500 kr</h3>
                <p className="text-gray-600">Totalt stjålet beløp</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-600 mb-2">4</h3>
                <p className="text-gray-600">Anmeldte tilfeller</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">76 år</h3>
                <p className="text-gray-600">Gjennomsnittsalder offer</p>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Interactive Map Section */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Her har svindlerne slått til
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Kartet viser hvor de kjente tilfellene har skjedd. Klikk på markørene for mer informasjon.
            </p>
            <InteractiveMap incidents={fraudIncidents} />
          </section>
        </ScrollReveal>

        {/* Timeline Section */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Slik utviklet sakene seg
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              En kronologisk oversikt over de anmeldte svindeltilfellene viser et klart mønster.
            </p>
            <Timeline incidents={fraudIncidents} />
          </section>
        </ScrollReveal>

        {/* Advice Boxes */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Dette må du vite
            </h2>
            <div className="space-y-8">
              {adviceBoxes.map((box, index) => (
                <ScrollReveal key={box.id} delay={index * 200}>
                  <CalloutBox
                    type={box.type}
                    title={box.title}
                    content={box.content}
                    source={box.source}
                  />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Protection Steps */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Slik beskytter du deg mot svindel
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {protectionSteps.map((step, index) => (
                <ScrollReveal key={step.id} delay={index * 150}>
                  <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {step.id}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Summary/Call to Action */}
        <ScrollReveal>
          <section className="text-center py-16">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-lg">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Husk: Kommunen tar aldri kontakt for å kreve penger
                </h2>
                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                  Alle kommunale avgifter og krav sendes per post med mulighet for klage og betalingsfrist. 
                  Ved tvil - ring kommunen direkte på det offisielle nummeret.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Ring politiet: 02800
                  </Button>
                  <Button variant="outline" size="lg">
                    Kontakt din kommune
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-4">
            Har du tips til saken eller har blitt utsatt for lignende svindel?
          </p>
          <Button variant="outline">
            Send tips til redaksjonen
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default NewsStory;