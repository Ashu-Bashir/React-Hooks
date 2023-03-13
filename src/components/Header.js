import reactLogo from "../images/logo192.png"
export default function Header() {
    return(
<header className="header">
<nav  className="nav">
  <img className="nav-logo" src={reactLogo} alt= "react-logo"/>
  <ul className="nav-items">
    <li>About</li>
    <li>Contacts</li>
    <li>Price</li>
  </ul>
</nav>
</header>
    )
    
}
