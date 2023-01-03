import '../appForm/appForm.scss'
import Button from "../../../Utils/Components/Button/button";

const FormSign = ({ Label, Type }) => {
    
    return (
        <>
            <label>
                {Label}
                <input type={Type}/>
            </label>
        </>
    )
};

export default FormSign;