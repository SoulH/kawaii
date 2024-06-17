import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './icon-button.css';

const IconButton = ({className, icon, style, show, onClick}) => {
    if (show) return (<></>);
    const clss = ['icon-button', className].join(' ').trim(); 
    return (
        <div className={clss} style={style} onClick={onClick}>
            <FontAwesomeIcon icon={icon}/>
        </div>);
};

export default IconButton;