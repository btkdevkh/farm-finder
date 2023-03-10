import SearchFarm from "./Farm/SearchFarm"
import headerStyles from "@/styles/Header.module.css"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContainer}>
        <div className={headerStyles.flexLeft}>
          <h1 className={headerStyles.mainTitle}>
            <a href={"/"}>
              FarmFinder <span className={headerStyles.watermark}>By NEXT</span>
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
      </div>
    </header>
  )
}

export default Header
