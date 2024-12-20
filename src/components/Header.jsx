import smitlogo from "../assets/smit-logo.png";

function Header() {
    return (
       <header>
        <nav className="header-logo">
            <img src={smitlogo} alt="smitlogo" />
        </nav>
       </header>
    )
}

export default Header;