import './Menu.css'
import homeIcon from '../../assets/icons/home-ativo.png'
import mostLikedIcon from '../../assets/icons/mais-curtidas-inativo.png'
import mostSeenIcon from '../../assets/icons/mais-vistas-inativo.png'
import recentIcon from '../../assets/icons/novas-inativo.png'
import surpriseMeIcon from '../../assets/icons/surpreenda-me-inativo.png'


function Menu () {
    return(
        <nav className='menu'>
            <ul className='list'>
                <li className='item'>
                    <img src={homeIcon} alt="" />
                    <a href="/">Início</a>
                </li>
                <li className='item'>
                    <img src={mostSeenIcon} alt="" />
                    <a href="/">Mais vistas</a>
                </li>
                <li className='item'>
                    <img src={mostLikedIcon} alt="" />
                    <a href="/">Mais curtidas</a>
                </li>
                <li className='item'>
                    <img src={recentIcon} alt="" />
                    <a href="/">Novas</a>
                </li>
                <li className='item'>
                    <img src={surpriseMeIcon} alt="" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}


export default Menu;