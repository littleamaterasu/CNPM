import './Header.css'
import UserAvt from './UserAvt/UserAvt'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import SearchBar from './SearchBar/searchBar'

const Header = ({user, handleSetUser, handleSetActive, handleSetGameSelectedList}) => {
  return (
    <div id="header">
      <div className="nav">
        <i onClick={() => handleSetActive("default")} className="fa fa-home"></i>
      </div>

      {user && <h3>{user.name}</h3>}

      <div className="search">
        <SearchBar handleSetActive={handleSetActive} handleSetGameSelectedList={handleSetGameSelectedList}/>
      </div>

      <div className="useraction">
        {(user && user.role === "player") && <ShoppingCart user={user} handleSetActive={handleSetActive}/>}
        <UserAvt user={user} handleSetUser={handleSetUser} handleSetActive={handleSetActive}/>
      </div>
    </div>
  )
}

export default Header