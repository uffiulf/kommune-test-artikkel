import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import ScrollReveal from './ScrollReveal';

const Timeline = ({ incidents }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300"></div>
      
      <div className="space-y-12">
        {incidents.map((incident, index) => (
          <ScrollReveal key={incident.id} delay={index * 200}>
            <div className="relative flex items-start gap-6">
              {/* Timeline marker */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                {/* Connector line */}
                <div className="absolute top-1/2 left-16 w-8 h-0.5 bg-slate-300"></div>
              </div>

              {/* Content card */}
              <Card className="flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {incident.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{incident.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{incident.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      Tap: {incident.loss}
                    </div>
                  </div>

                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {incident.description}
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                      <p className="text-amber-800 font-medium text-sm">
                        <strong>Metode:</strong> {incident.method}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Timeline;