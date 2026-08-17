'use client'
import { MapContainer, TileLayer } from 'react-leaflet'

export default function Map() {
  return (
    <MapContainer center={[41.4, -81.7]} zoom={9} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
    </MapContainer>
  )
}