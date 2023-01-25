import { IFarm } from "@/types/IFarm"
import FarmItem from "./FarmItem"
import farmListStyles from "@/styles/Farm/FarmList.module.css"

type FarmListProps = {
  farms: IFarm[]
}

const FarmList = ({ farms }: FarmListProps) => {
  return (
    <>
      <h2>
        <i className="fa-solid fa-cow"></i> Fermes
      </h2>
      <hr />
      <br />
      {farms.length > 0 ? (
        <div className={farmListStyles.farmList}>
          {farms.map(farm => (
            <FarmItem key={farm.id} farm={farm} />
          ))}
        </div>
      ) : (
        <div>
          Il n'y a pas de fermes trouvrées qui corresponde à votre recherche.
        </div>
      )}
    </>
  )
}

export default FarmList
