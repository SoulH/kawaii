import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './rounded-icon-button.css';

const RoundedIconButton = ({className, icon, style, show, onClick}) => {
    if (show) return (<></>);
    const clss = ['rounded-icon-button', className].join(' ').trim(); 
    return (
        <div className={clss} style={style} onClick={onClick}>
            <FontAwesomeIcon icon={icon}/>
        </div>);
};

export default RoundedIconButton;