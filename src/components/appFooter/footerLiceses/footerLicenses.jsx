import '../footerLiceses/footerLicenses.scss'
import Data from "../../../Utils/data/data";

const footerLicenses = () => {
    return (
        <nav className='LicensesNav'>
            <ul className='LicensesItems'>
                {Data.footerItems.map(({title,url},index)=> {
                    return(
                        <li className='LicensesItem'
                            key={index}>
                            <a href={url}>{title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default footerLicenses;