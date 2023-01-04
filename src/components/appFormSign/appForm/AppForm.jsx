import '../appForm/appForm.scss'

const FormSign = ({ Label, Type,onChange }) => {
    
    return (
        <>
            <label>
                {Label}
                <input type={Type} onChange={onChange}/>
            </label>
        </>
    )
};

export default FormSign;