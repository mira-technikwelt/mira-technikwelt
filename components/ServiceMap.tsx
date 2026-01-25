"use client";
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface City {
  name: string;
  lat: number;
  lng: number;
  description: string;
  zone: number;
}

interface Zone {
  id: string;
  name: string;
  radius: number;
  color: string;
  description: string;
  cities: City[];
}

interface ServiceMapProps {
  zones: Zone[];
  selectedZone: string | null;
}

// Fix for default marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

export default function ServiceMap({ zones, selectedZone }: ServiceMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const circlesRef = useRef<L.Circle[]>([]);
  const layersRef = useRef<L.LayerGroup[]>([]);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Calculate bounds to limit map scrolling (roughly 100km radius around Backnang)
    const bounds = L.latLngBounds(
      [48.4, 8.8], // Southwest corner
      [49.5, 10.0]  // Northeast corner
    );

    // Initialize map centered on Backnang
    const map = L.map(mapContainerRef.current, {
      center: [48.9474, 9.4302],
      zoom: 10,
      zoomControl: true,
      attributionControl: true,
      minZoom: 8,
      maxZoom: 13,
      maxBounds: bounds,
      maxBoundsViscosity: 1.0, // Prevent panning outside bounds
    });

    // Add dark tile layer (using CartoDB dark theme)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 13,
    }).addTo(map);

    mapRef.current = map;

    // Create layer groups for each zone
    zones.forEach((zone) => {
      const layerGroup = L.layerGroup().addTo(map);
      layersRef.current.push(layerGroup);

      // Add circle for zone
      const circle = L.circle([48.9474, 9.4302], {
        radius: zone.radius * 1000, // Convert km to meters
        color: zone.color,
        fillColor: zone.color,
        fillOpacity: 0.1,
        weight: 2,
        opacity: 0.6,
      }).addTo(layerGroup);

      circlesRef.current.push(circle);

      // Add markers for cities in this zone
      zone.cities.forEach((city) => {
        // Custom icon based on zone
        const icon = L.divIcon({
          className: 'custom-marker',
          html: `<div style="
            background-color: ${zone.color};
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 0 0 2px ${zone.color}40;
          "></div>`,
          iconSize: [12, 12],
          iconAnchor: [6, 6],
        });

        const marker = L.marker([city.lat, city.lng], { icon })
          .addTo(layerGroup)
          .bindPopup(`
            <div style="color: #1e293b; font-family: system-ui, -apple-system, sans-serif;">
              <strong style="color: ${zone.color}; font-size: 16px;">${city.name}</strong>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b;">${city.description}</p>
            </div>
          `);

        markersRef.current.push(marker);
      });
    });

    // Fit map to show all markers
    if (markersRef.current.length > 0) {
      const group = new L.FeatureGroup(markersRef.current);
      map.fitBounds(group.getBounds().pad(0.1));
    }

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      markersRef.current = [];
      circlesRef.current = [];
      layersRef.current = [];
    };
  }, []);

  // Update zone visibility based on selection
  useEffect(() => {
    if (!mapRef.current) return;

    layersRef.current.forEach((layer, index) => {
      if (selectedZone === null) {
        // Show all zones
        mapRef.current?.addLayer(layer);
      } else {
        // Show only selected zone
        if (zones[index]?.id === selectedZone) {
          mapRef.current?.addLayer(layer);
        } else {
          mapRef.current?.removeLayer(layer);
        }
      }
    });
  }, [selectedZone, zones]);

  useEffect(() => {
    // Add custom styles for Leaflet
    const style = document.createElement('style');
    style.textContent = `
      .leaflet-container {
        background: #0f172a !important;
        font-family: inherit;
      }
      .leaflet-popup-content-wrapper {
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      .leaflet-popup-tip {
        background: white;
      }
      .custom-marker {
        background: transparent !important;
        border: none !important;
      }
      .leaflet-control-zoom a {
        background-color: #1e293b !important;
        color: white !important;
        border: 1px solid #334155 !important;
      }
      .leaflet-control-zoom a:hover {
        background-color: #334155 !important;
      }
      .leaflet-control-attribution {
        background-color: rgba(15, 23, 42, 0.8) !important;
        color: #94a3b8 !important;
        font-size: 11px;
      }
      .leaflet-control-attribution a {
        color: #60a5fa !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-full rounded-2xl"
      style={{ zIndex: 0 }}
    />
  );
}

