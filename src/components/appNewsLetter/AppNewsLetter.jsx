import '../appNewsLetter/appNewsLetter.scss'

import CustomForm from "./newsLetterCustomForm/CustomForm";

const AppNewsLetter = () => {
    return(
        <section className='NewsLetterSection'>
            <div className='NewsLetterSection__Wrapper'>
                <div className='NewsLetterSection__Wrapper__Info'>
                    <span>Email Newsletter</span>
                    <h3>Subscribe for updates</h3>
                </div>
                <div className='NewsLetterSection__Wrapper__Form'>
                    <CustomForm/>
                </div>
            </div>
        </section>
    )
}
export default AppNewsLetter