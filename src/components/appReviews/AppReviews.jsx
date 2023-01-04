import '../appReviews/appReviews.scss';
import CardReview from "../../Utils/Components/CardReview/CardReview";

import {useQuery} from "react-query";
import {getReview} from '../api/reviewApi'

import Skeleton from "../../Utils/Components/Skeleton/Skeleton";


const AppReviews = () => {

    const {isLoading, isError, error, data: reviewInfo} = useQuery('review', getReview)

    let review
    if(isLoading){
        review = <Skeleton/>
    }else if(isError){
        review = <p>{error.message}</p>
    }else {
        review = reviewInfo.reviewInfo.map(({author,review,id}) => {
            return(
                <CardReview
                    author={author}
                    review={review}
                    key={id}/>
            )
        })
    }

    return(
        <section className='ReviewsSection'>
            <div className='Cards'>
                {review}
            </div>
        </section>
    )
}
export default AppReviews;