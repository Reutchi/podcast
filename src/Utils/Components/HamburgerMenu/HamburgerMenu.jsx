import '../HamburgerMenu/HamburgerMenu.scss'
import { slide as Menu } from 'react-burger-menu';
import Data from '../../data/data'

const toggleMenu = ({ isOpen },e) => {
    const menuWrap = document.querySelector('.bm-menu-wrap')
    if(isOpen.key === 'Escape'){
        isOpen
            ? menuWrap.setAttribute('aria-hidden', false)
            : menuWrap.setAttribute('aria-hidden', true)
    }
}

const HamburgerMenu = () => {
    return (
        <Menu noOverlay onStateChange={toggleMenu} open>
            {Data.NavItems.map((navItem,index) => {
                return(
                    <a key={index} href={navItem.url} className='menu-item'>{navItem.title}</a>
                )
            })}
        </Menu>
    )
}
export default HamburgerMenu