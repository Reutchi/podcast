import '../SocialMediaLinks/SocialMediaLinks.scss'
import Data from '../../data/data'

const SocialMediaLinks = () => {
    return(
        <ul className='FooterSocialLinks'>
            {Data.socialMediaIcons.map((social,index) => {
                return(
                        <li key={index}
                            className='FooterSocialLink'>
                            <a href="">{social.img}</a>
                        </li>
                )
            })}
        </ul>
    )
}
export default SocialMediaLinks