import './appHeader.scss';

import {NavLink,useNavigate} from "react-router-dom";
import Icons from '../../Utils/data/icon'
import Data from '../../Utils/data/data'


import HamburgerMenu from "../../Utils/Components/HamburgerMenu/HamburgerMenu";
import {UserAuth} from "../../context/AuthContext";

const AppHeader = () => {
    const {user,logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
        await logout()
            navigate('/')
            console.log('you are logged out')
        }catch (e){
            console.log(e.message)
        }
    }

    return (
        <header className='HeaderComponent'>
            <figure className='HeaderComponent__Logo'>
                <a href="/">
                    <Icons.LogoIcon/>
                </a>
            </figure>
            <HamburgerMenu className='BurgerMenu'/>
            <nav className='HeaderComponent__Nav'>
                <ul className='HeaderComponent__NavItems'>
                    {Data.NavItems.map(({title,url},index) => {
                        return(
                            <li key={index} className='HeaderComponent__NavItem'>
                                <NavLink style={({isActive}) => ({color: isActive ? '#118DA8' : 'inherit' })} to={url}>{title}</NavLink>
                            </li>
                        )
                    })}
                    {user && user.email ? (
                        <a onClick={handleLogout} className="emailUser">
                            Logout {user.email}
                        </a>
                    ) : (
                        <NavLink className="SignUp" to="/signup">
                            Sign Up
                        </NavLink>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader