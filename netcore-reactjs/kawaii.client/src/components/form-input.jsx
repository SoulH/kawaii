import IconButton from './icon-button';
import './form-input.css';


const FormInput = ({title, icon, type, value, onChange}) => {
    
    return (
    <div className='form-input'>
        <strong>{title}</strong>
        <div className='form-input-field'>
            <IconButton icon={icon} className='input-icon'/>
            <input onChange={onChange} type={type} value={value}/>
        </div>
    </div>);
}

export default FormInput;