import logo from '../../assets/smit-logo.jpg'
function Header() {
  return (
      <header style={{backgroundColor: "#8dc63f", padding: "10px", paddingLeft: "60px"}}>
        <nav>
            <div className="logo">
              <img src={logo} alt="SMIT logo" width={125} />
            </div>

        </nav>
      </header>
  )
}

export default Header