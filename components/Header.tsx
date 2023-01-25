import SearchFarm from "./Farm/SearchFarm"
import headerStyles from "@/styles/Header.module.css"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.flexLeft}>
        <h1 className={headerStyles.mainTitle}>
          <a href={"/"}>
            FarmFinder{" "}
            <span className={headerStyles.watermark}>Greenshield </span>
          </a>
        </h1>
      </div>

      <nav className={headerStyles.flexRight}>
        <ul>
          <li>
            <SearchFarm />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
