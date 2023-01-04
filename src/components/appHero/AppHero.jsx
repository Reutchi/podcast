import HeroImg from '../../Utils/Images/hero.png'
import './appHero.scss';

import MovingText from 'react-moving-text'
import Social from "../../Utils/Components/SocialPodcast/SocialPodcast";

import {useQuery} from "react-query";
import {getReview} from "../api/reviewApi";

import Skeleton from "../../Utils/Components/Skeleton/Skeleton";
import CardReview from "../../Utils/Components/CardReview/CardReview";
import {getArticle} from "../api/articleApi";
import getHeroTitle from "../api/headerTitleApi";


const AppHero = () => {
    const {isLoading, isError, error, data: Title} = useQuery('title', getHeroTitle)


    let titleHero
    if(isLoading){
        titleHero = <p>Loading...</p>
    }else if(isError){
        titleHero = <p>{error.message}</p>
    }else {
        titleHero = Title.title.map((item,index) =>{
            return(
                <MovingText
                    key={index}
                    type="fadeInFromRight"
                    duration="2000ms"
                    delay="0s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="backwards"
                    className="HeroSection_Title"
                >
                    {item.title}<span>level</span>
                </MovingText>
            )
        })
    }


    return(
        <section className='HeroSection'>
            <figure className='HeroSection__Img'>
                <img src={HeroImg} alt="Hero"/>
            </figure>
            <div className='HeroSection__Icons__Wrapper'>
                {titleHero}
                    <div className='HeroSection_Wrapper_Podcast'>
                        <p className='HeroSection__Icon__Title'>{}</p>
                        <Social/>
                    </div>
                </div>
        </section>
    )
}
export  default AppHero