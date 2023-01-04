import '../CardArticle/CardArticle.scss'
import Button from "../Button/button";

const CardArticle = ({articleImg,category,episode,title,description,alt}) => {
    return(
        <div className='CardArticle'>
            <div className='CardWrapper'>
                <figure>
                    <img
                        src={articleImg}
                        alt={alt}/>
                </figure>
                <div className='CardDescription'>
                    <a href="">{category}</a>
                    <span>{episode}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Button title='View Episode Details'/>
                </div>
            </div>
        </div>
        )
}
export default CardArticle