import React, { useState, useEffect } from 'react';
import { MapPin, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const InteractiveMap = ({ incidents }) => {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [animatedIncidents, setAnimatedIncidents] = useState([]);

  useEffect(() => {
    // Animate incidents appearing one by one
    incidents.forEach((incident, index) => {
      setTimeout(() => {
        setAnimatedIncidents(prev => [...prev, incident.id]);
      }, index * 500);
    });
  }, [incidents]);

  const mapStyle = {
    background: `linear-gradient(135deg, 
      #f8fafc 0%, 
      #e2e8f0 50%, 
      #cbd5e1 100%)`,
  };

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg" style={mapStyle}>
      {/* Simple SVG Map of Norway region */}
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Simplified Norway outline */}
        <path
          d="M180 50 L220 60 L240 80 L250 120 L240 160 L220 180 L200 190 L180 200 L160 190 L140 180 L130 160 L120 120 L130 80 L150 60 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          strokeWidth="1"
        />
        
        {/* Østfold region */}
        <path
          d="M200 160 L230 150 L240 170 L220 180 L200 175 Z"
          fill="#d1d5db"
          stroke="#6b7280"
          strokeWidth="1"
        />
        
        {/* Lillestrøm area */}
        <path
          d="M180 140 L200 135 L210 150 L190 155 Z"
          fill="#d1d5db"
          stroke="#6b7280"
          strokeWidth="1"
        />

        {/* Incident markers */}
        {incidents.map((incident, index) => (
          <g key={incident.id}>
            {animatedIncidents.includes(incident.id) && (
              <>
                {/* Pulsing circle animation */}
                <circle
                  cx={incident.x}
                  cy={incident.y}
                  r="8"
                  fill="#ef4444"
                  opacity="0.3"
                  className="animate-ping"
                />
                <circle
                  cx={incident.x}
                  cy={incident.y}
                  r="6"
                  fill="#dc2626"
                  className="cursor-pointer hover:fill-red-700 transition-colors"
                  onClick={() => setSelectedIncident(incident)}
                />
                <text
                  x={incident.x + 10}
                  y={incident.y + 5}
                  fontSize="10"
                  fill="#374151"
                  className="font-medium"
                >
                  {incident.location}
                </text>
              </>
            )}
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <span>Svindeltilfeller</span>
        </div>
      </div>

      {/* Selected incident popup */}
      {selectedIncident && (
        <Card className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900">{selectedIncident.location}</h4>
                <p className="text-sm text-gray-600 mt-1">{selectedIncident.date}</p>
                <p className="text-sm text-gray-700 mt-2">{selectedIncident.description}</p>
                <button
                  className="text-xs text-blue-600 hover:text-blue-800 mt-2"
                  onClick={() => setSelectedIncident(null)}
                >
                  Lukk
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default InteractiveMap;