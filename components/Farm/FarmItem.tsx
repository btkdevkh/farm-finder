import { IFarm } from "@/types/IFarm"
import farmItemStyles from "@/styles/Farm/FarmItem.module.css"
import Link from "next/link"
import GMap from "../Map/GMap"

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
          <GMap location={farm.location} id={farm.id as number} />
        </div>

        {/* Farmer */}
        <div className={farmItemStyles.farmer}>
          <h4>
            <i className="fa-solid fa-user"></i> {farm.contact.prenom}{" "}
            {farm.contact.nom}
          </h4>
          <p>
            <i className="fa-solid fa-phone"></i> {farm.contact.tel}
          </p>
          <Link href={`mailto:${farm.contact.email}`}>
            <i className="fa-solid fa-at"></i> {farm.contact.email}
          </Link>
        </div>
      </div>
    </>
  )
}

export default FarmItem
