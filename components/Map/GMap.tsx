import Image from "next/image"
import GMapStyles from "@/styles/Map/GMap.module.css"
import Map, { Marker } from "react-map-gl"
import { GeoPoint } from "firebase/firestore"

type GMapProps = {
  location: GeoPoint
  id: string | number
}

const GMap = ({ location }: GMapProps) => {
  return (
    <div className={GMapStyles.mapContainer}>
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
        >
          <Image src="/pin.png" width={40} height={55} priority alt="pin" />
        </Marker>
      </Map>
    </div>
  )
}

export default GMap
