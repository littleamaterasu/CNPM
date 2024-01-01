import './Header.css'
import UserAvt from './UserAvt/UserAvt'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import SearchBar from './SearchBar/searchBar'
const Header = ({handleSetActive, handleSetGameSelectedList}) => {
  return (
    <div id="header">
      <div className="nav">
        <i onClick={() => handleSetActive("default")} className="fa-brands fa-tiktok"></i>
        <h4>Text</h4>
        <h4>Text</h4>
        <h4>Text</h4>
      </div>

      <div className="search">
        <SearchBar handleSetActive={handleSetActive} handleSetGameSelectedList={handleSetGameSelectedList}/>
      </div>

      <div className="useraction">
        <ShoppingCart/>
        <UserAvt handleSetActive={handleSetActive}/>
      </div>
    </div>
  )
}

export default Header