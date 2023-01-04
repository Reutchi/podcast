import '../CardReview/CardReview.scss';
import {Rating} from "@mui/material";


const CardReview = ({review,author}) => {

    return(
        <div className='Card'>
            <div className='CardStars'>
                    <Rating name="size-large" defaultValue={2} size="large"  style={{'fill' : 'yellow'}}/>
            </div>
            <p className='CardReview'>{review}</p>
            <h4 className='CardAuthor'>{author}</h4>
        </div>
    )
}
export default CardReview