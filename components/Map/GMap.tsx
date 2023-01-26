import Image from "next/image"
import GMapStyles from "@/styles/Map/GMap.module.css"
import Map, { Marker } from "react-map-gl"
import { GeoPoint } from "firebase/firestore"
import { ReactNode } from "react"

type GMapProps = {
  children?: ReactNode
  location: GeoPoint
  handleCLick?: () => void
}

const GMap = ({ children, location, handleCLick }: GMapProps) => {
  return (
    <div className={GMapStyles.mapContainer}>
      {children}
      <Map
        initialViewState={{
          longitude: location.longitude,
          latitude: location.latitude,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={process.env.NEXT_PUBLIC_AECCESS_TOKEN}
      >
        <Marker
          longitude={location.longitude}
          latitude={location.latitude}
          anchor="center"
          style={{ cursor: "pointer" }}
          onClick={handleCLick}
        >
          <Image src="/pin.png" width={20} height={30} priority alt="pin" />
        </Marker>
      </Map>
    </div>
  )
}

export default GMap
