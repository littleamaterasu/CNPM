import './Header.css'
const Header = () => {
    return (
      <div id="header">
        <div className="nav">
          <a href="" className="logo">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="" className="navItem">Text</a>
          <a href="" className="navItem">Text</a>
          <a href="" className="navItem">Text</a>
        </div>

        <div className="search">
          <input type="text" placeholder="Nhập tên trò chơi" />
          <a href="" className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>

        <div className="useraction">
          <a href="" className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>

          <a href="" className="pro5btn">
            <i className="fa-solid fa-user"></i>
          </a>
        </div>
      </div>
    )
}

export default Header