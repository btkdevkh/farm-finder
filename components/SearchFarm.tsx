import searchFarmStyles from "@/styles/SearchFarm.module.css"

const SearchFarm = () => {
  return (
    <form className={searchFarmStyles.searchFarm}>
      <button className={searchFarmStyles.searchBtn}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>{" "}
      <input id="search" type="search" placeholder="Rechercher des fermes..." />
    </form>
  )
}

export default SearchFarm
