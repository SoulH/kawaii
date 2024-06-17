import { useEffect, useState } from 'react';
import './size.css';


const SizeFilter = ({onSelect, style}) => {
    const [size, setSize] = useState(undefined);

    useEffect(() => onSelect(size), [size]);

    return (
        <div className='size-filter'>
            <strong className='size-filter-title'>Sizes:</strong>
            <div className='size-filter-options' style={style}>
                <div className={'size-filter-item' + (size === 'XS' ? ' size-filter-item-selected' : '')} onClick={e => setSize(size === 'XS' ? undefined : 'XS')}>XS</div>
                <div className={'size-filter-item' + (size === 'S' ? ' size-filter-item-selected' : '')} onClick={e => setSize(size === 'S' ? undefined : 'S')}>S</div>
                <div className={'size-filter-item' + (size === 'M' ? ' size-filter-item-selected' : '')} onClick={e => setSize(size === 'M' ? undefined : 'M')}>M</div>
                <div className={'size-filter-item' + (size === 'ML' ? ' size-filter-item-selected' : '')} onClick={e => setSize(size === 'ML' ? undefined : 'ML')}>ML</div>
                <div className={'size-filter-item' + (size === 'L' ? ' size-filter-item-selected' : '')} onClick={e => setSize(size === 'L' ? undefined : 'L')}>L</div>
                <div className={'size-filter-item' + (size === 'XL' ? ' size-filter-item-selected' : '')} onClick={e => setSize(size === 'XL' ? undefined : 'XL')}>XL</div>
                <div className={'size-filter-item' + (size === 'XXL' ? ' size-filter-item-selected' : '')} onClick={e => setSize(size === 'XXL' ? undefined : 'XXL')}>XXL</div>
            </div>
        </div>);
};

export default SizeFilter;