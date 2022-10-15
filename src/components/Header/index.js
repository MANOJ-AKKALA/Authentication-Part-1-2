// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = () => {
  const onClickLogout = props => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
      />
      <div className="nav-content nav-bar-large-container">
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/cart"> Cart</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/login"> Login Form </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
