import { IFarm } from "@/types/IFarm"
import farmItemStyles from "@/styles/Farm/FarmItem.module.css"
import Link from "next/link"

type FarmItemProps = {
  farm: IFarm
}

const FarmItem = ({ farm }: FarmItemProps) => {
  return (
    <>
      <div className={farmItemStyles.farmItem}>
        {/* Farm */}
        <div className={farmItemStyles.farm}>
          <h3>{farm.name}</h3>
          <p>Longitude: {farm.location.longitude}</p>
          <p>Latitude: {farm.location.latitude}</p>
        </div>

        {/* Farmer */}
        <div className={farmItemStyles.farmer}>
          <h4>
            {farm.contact.prenom} {farm.contact.nom}
          </h4>
          <p>Tel: {farm.contact.tel}</p>
          <Link href={`mailto:${farm.contact.email}`}>
            Email: {farm.contact.email}
          </Link>
        </div>
      </div>
    </>
  )
}

export default FarmItem
