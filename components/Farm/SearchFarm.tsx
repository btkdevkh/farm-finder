import { FarmFinderContext } from "@/context/farmFinderContext"
import searchFarmStyles from "@/styles/Farm/SearchFarm.module.css"
import { useContext } from "react"

const SearchFarm = () => {
  const { handleChange } = useContext(FarmFinderContext)

  return (
    <form className={searchFarmStyles.searchFarm}>
      <button className={searchFarmStyles.searchBtn}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>{" "}
      <input
        id="search"
        type="search"
        placeholder="e.g. nom de ferme, produit, alias"
        onChange={e => handleChange(e.target.value)}
      />
    </form>
  )
}

export default SearchFarm
