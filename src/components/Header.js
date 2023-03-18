import NavLinks from './NavLinks'
import MD from '../images/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={MD} alt="logo" />
      <NavLinks />
    </header>
  )
}

export default Header
