'use client'
import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'

export default function Map() {
  const [counties, setCounties] = useState(null)

  useEffect(() => {
    fetch('/ne-ohio-counties.json')
      .then((res) => res.json())
      .then((data) => setCounties(data))
  }, [])

  return (
    <MapContainer center={[41.4, -81.7]} zoom={9} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {counties && (
        <GeoJSON data={counties} style={{ color: '#2563eb', weight: 2, fillOpacity: 0.5 }} />
      )}
    </MapContainer>
  )
}