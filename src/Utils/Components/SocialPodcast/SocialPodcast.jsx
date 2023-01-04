import '../SocialPodcast/SocialPodcast.scss';
import Data from "../../data/data";

const SocialPodcast = () => {
    return(
        <ul className='HeroSection__Icons__Items'>
            {Data.socialIcons.map(({id,url,img,title},i)=> {
                return(
                    <li key={id} className='HeroSection__Icon__Item' title={title}>
                        <a href={url}>
                            {img}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
export default SocialPodcast;