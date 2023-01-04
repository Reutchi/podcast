import '../Navigation/Navigation.scss'
import Data from "../../data/data";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <nav>
            <ul className='HeaderComponent__NavItems'>
                {Data.NavItems.map(({title,url},index) => {
                    return(
                        <li key={index} className='HeaderComponent__NavItem'>
                            <NavLink to={url}>{title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Navigation