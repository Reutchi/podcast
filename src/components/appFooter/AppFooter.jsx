import '../appFooter/AppFoter.scss';
import Icon from "../../Utils/data/icon";

import Navigation from "../../Utils/Components/Navigation/Navigation";
import FooterLicenses from "./footerLiceses/footerLicenses";
import SocialPodcast from "../../Utils/Components/SocialPodcast/SocialPodcast";
import SocialMediaLinks from "../../Utils/Components/SocialMediaLinks/SocialMediaLinks";

const AppFooter = () => {
    return(
        <footer className='FooterSection'>
            <div className='FooterSection__Wrapper'>
                <figure className='HeaderComponent__Logo'>
                    <a href="/">
                        <Icon.LogoIcon/>
                    </a>
                    <SocialMediaLinks/>
                </figure>
                <Navigation/>
                <FooterLicenses/>
                <SocialPodcast/>
            </div>
        </footer>
    )
}
export default AppFooter