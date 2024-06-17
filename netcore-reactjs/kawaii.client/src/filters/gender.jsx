import { useEffect, useState } from 'react';
import './gender.css';


const GenderFilter = ({onSelect, style}) => {
    const [selected, setSelected] = useState(undefined);

    useEffect(() => onSelect(selected), [selected]);

    const changeSelection = (text) => setSelected(selected === text ? undefined : text);

    return (
    <div className='gender-filter' style={style}>
        <strong>Gender:</strong>
        <div className='gender-filter-options'>
            <div className={'gender-filter-btn gender-filter-left' + (selected === 'female' ? ' gender-filter-btn-selected': '')} 
                onClick={() => changeSelection('female')}>Female</div>
            <div className={'gender-filter-btn' + (selected === 'unisex' ? ' gender-filter-btn-selected' : '')}
                onClick={() => changeSelection('unisex')}>Unisex</div>
            <div className={'gender-filter-btn gender-filter-right' + (selected === 'male' ? ' gender-filter-btn-selected' : '')} 
                onClick={() => changeSelection('male')}>Male</div>
        </div>
    </div>);
};

export default GenderFilter;