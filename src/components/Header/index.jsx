import "./Header.css"
import logo from "../../assets/logo.png"
import searchIcon from "../../assets/search.png"

function Header() {
    return(
        <header className="header">

            <img src={logo} alt="logo" />

            <div>
                <input type="text" placeholder="O que você procura?" name="Search Field"/>
                <img src={searchIcon} alt="icone de busca" srcset="" />
                
            </div>

        </header>
    )
}

export default Header;