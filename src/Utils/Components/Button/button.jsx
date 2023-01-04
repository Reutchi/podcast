import '../Button/button.scss'

const ButtonBlue = ({title,redirect}) => {

    return (
    <>
        <button className='btn' onClick={redirect}>
            {title}
        </button>
    </>
    )
}
export default ButtonBlue;
