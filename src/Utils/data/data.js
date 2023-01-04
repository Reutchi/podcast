
//Navigation items list
import Icon from "./icon";

const NavItems = [
    {title: 'Home', url: '/',},
    {title: 'Episodes', url: '/episodes',},
    {title: 'About', url: '/about',},
    {title: 'Contact', url: '/contact',},
    // {title: 'Sign Up ', url: '/signup',},
]

const socialIcons = [
    {id:1, img: <Icon.SpotifyIcon/> ,url:'/',title: 'Spotify'},
    {id:2, img: <Icon.PocketCastsIcon/>,url:'/',title:'PocketCasts'},
    {id:3, img: <Icon.SoundCloudIcon/>,url:'/',title: 'Soundcloud'},
    {id:4, img: <Icon.PodcastIcon/>,url:'/',title: 'Podcast'},
    {id:5, img: <Icon.OverCastIcon/>,url:'/',title: 'OverCast'},
]


//reviewSection
const reviewInfo = [
    {id:1, author: 'Betty Lacey', review: 'I can’t recommend this podcast enough'},
    {id:2, author: 'Adam Driver', review: 'Jacob is the best in the business'},
    {id:3, author: 'Marcus Brown', review: 'A wealth of audio knowledge'},
    {id:4, author: 'Jessica Knowl', review: 'Every episode is a gem!'},
    {id:5, author: 'Scott Adams', review: 'Whoa whoa, let me take some notes!'},
    {id:6, author: 'Steven Blast', review: 'I’ve upped my game considerably since I started listening'},
]

//footerSection
const footerItems = [
    {title: 'Style Guide', url: '/',},
    {title: 'Instructions', url: '/',},
    {title: 'Changelog', url: '/',},
    {title: 'Credit', url: '/',},
    {title: 'Powered by Webflow', url: '/',},
    {title: 'Licenses', url: '/',},
]

//footer SocialMedia fb,inst,twitt
const socialMediaIcons = [
    {id:1, img: <Icon.instagramIcon/> ,url:'/',title: 'Instagram'},
    {id:2, img: <Icon.twitterIcon/>,url:'/',title:'Twitter'},
    {id:3, img: <Icon.facebookIcon/>,url:'/',title: 'Facebook'},
]

const Data = {
    NavItems,
    socialIcons,
    reviewInfo,
    footerItems,
    socialMediaIcons,
}

export default Data