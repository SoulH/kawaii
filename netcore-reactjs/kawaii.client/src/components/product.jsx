import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import CartIndexedService from "../services/cart";
import './product.css';


const Product = ({data}) => {
    const srvc = new CartIndexedService();
    const [preIndex, setPreIndex] = useState(0);
    const [imgIndex, setImgIndex] = useState(1);

    const pre = data.presentations[preIndex];
    const {size, color} = pre.details;
    const img = ['https://localhost:7195', 'catalog', pre.images[imgIndex]].join('/');
    const [main, cents] = pre.price.toString().split(/[.,]/);

    const addItem = async (e) => {
        await srvc.add({
            id: 0, 
            userId: 0, 
            productId: data.id, 
            presentationId: pre.id, 
            productName: data.name, 
            quantity: 1, 
            price: pre.price, 
            image: pre.images[0], 
            details: pre.details
        });
    }

    return (
        <div className="product-tile" 
            onMouseEnter={() => setImgIndex(2)}
            onMouseLeave={() => setImgIndex(1)}>
            <img className="product-image" src={img} alt={data.name} />
            <div className="product-title">{data.name} - Size {size} - Color {color}</div>
            <div className="product-price">$ <strong>{main}</strong>.{cents}</div>
            <div className="product-button" onClick={addItem}>Add to card</div>
            <div className="product-options">
                {data.presentations.map((p, i) => {
                    if (i === preIndex)
                        return (<FontAwesomeIcon icon={faCircle} color="gold" key={i}
                                                onClick={() => setPreIndex(i)} 
                                                style={{cursor: 'pointer'}} />);
                    return (<FontAwesomeIcon icon={faCircle} key={i}
                                            onClick={() => setPreIndex(i)}
                                            style={{cursor: 'pointer'}} />);
                })}
            </div>
        </div>
    );
};

export default Product;