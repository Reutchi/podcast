import  './appArticle.scss';

import Button from "../../Utils/Components/Button/button";
import CardArticle from "../../Utils/Components/CardArticle/CardArticle";

import {useQuery } from "react-query";
import {getArticle} from "../api/articleApi";
import Skeleton from "../../Utils/Components/Skeleton/Skeleton";


const  AppArticle = () => {

    const {isLoading, isError, error, data: latestEpisodes} = useQuery('article', getArticle)

    let content
    if(isLoading){
        content = <Skeleton/>
    }else if(isError){
        content = <p>{error.message}</p>
    }else {
        content = latestEpisodes.latestEpisodes.map(({title,description,category,src,Episodes},id) => {
                return(
                    <CardArticle
                        key={id}
                        title={title}
                        description={description}
                        articleImg={require(`../../Utils/Images/articleImg/${src}.png`)}
                        category={category}
                        episode={Episodes + `${ id + 1}`}
                        alt={title}
                    />
                )
            })
    }

    return(
    <section className='ArticleSection'>
        <div className='ArticleSection__Wrapper__Title'>
            <h2 className='ArticleSection__Title'>Latest episodes</h2>
            <Button title='View all episodes'/>
        </div>
        <div className='CardArticles'>
            {content}
        </div>
    </section>
    )
}

export default AppArticle

