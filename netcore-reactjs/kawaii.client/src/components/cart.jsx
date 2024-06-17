import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import db from '../indexeddb/db';
import env from "react-dotenv";
import './cart.css';


const CartItemDetail = ({item, style}) => {
    const keys = ['size', 'color'];
    const capStyle = {textTransform: 'capitalize', fontSize: 'small', color: '#777'};

    return (
    <div className='cart-item-detail' style={style || {}}>
        <div className='cart-item-detail-detail'>
            {keys.map((k, i) => {
                return (
                <div key={i} style={{display: 'flex', gap: '10px'}}>
                    <strong style={capStyle}>{k}:</strong>
                    <div style={capStyle}>{item.details[k]}</div>
                </div>);
            })}
        </div>
        <div className='cart-item-detail-price'>
            $ <strong>{item.price}</strong>
        </div>
    </div>);
};

const CartItemQuantityButton = ({children, onClick}) => {
    return (
        <div className='cart-item-quantity-button' 
            onClick={onClick}>
            {children}
        </div>);
};

const CartItemQuantity = ({item, style}) => {
    const setQuantity = async (e) => {
        const qty = Number(e.currentTarget.value);
        return await db.cart.update(item.pk, {quantity: qty});
    };

    const incQuantity = async (e) => {
        const qty = item.quantity + 1;
        return await db.cart.update(item.pk, {quantity: qty});
    };

    const decQuantity = async (e) => {
        const qty = item.quantity - 1;
        return await db.cart.update(item.pk, {quantity: qty});
    };

    const delItem = async (e) => {
        return await db.cart.delete(item.pk);
    };

    return (
        <div className='cart-item-quantity' style={style || {}}>
            <div style={{display: 'flex', gap: '10px'}}>
                <strong style={{fontSize: 'small', color: '#777'}}>Quantity:</strong>
                <input type='number' className='cart-item-quantity-input' 
                    value={item.quantity} 
                    onChange={setQuantity}/>
            </div>
            <div style={{display: 'flex'}}>
                <CartItemQuantityButton onClick={incQuantity}>
                    <FontAwesomeIcon icon={faPlus}/>
                </CartItemQuantityButton>
                <CartItemQuantityButton onClick={decQuantity}>
                    <FontAwesomeIcon icon={faMinus}/>
                </CartItemQuantityButton>
                <CartItemQuantityButton onClick={delItem}>
                    <FontAwesomeIcon icon={faTrash}/>
                </CartItemQuantityButton>
            </div>
        </div>);
};


const CartItem = ({data, style}) => {
    const imgSrc = [env.API_URL, 'catalog', data.image].join('/');
    
    return (
    <div className='cart-item' style={style || {}}>
        <img className='cart-item-image' src={imgSrc} alt='item-image'/>
        <div className='cart-item-name'>{data.productName}</div>
        <CartItemDetail item={data} style={{gridColumn: 2, gridRow: 2}}/>
        <CartItemQuantity item={data}/>
    </div>);
};

const CartEmpty = ({style}) => {
    return (
    <div className='cart-empty' style={style || {}}>
        <img src='img/searching-1.gif' alt='searching'/>
        <h2>Looking for...</h2>
    </div>);
}

const CartSummary = ({items, style}) => {
    const total = (Math.round(items.reduce((a, b) => a + b.price * b.quantity, 0) * 100) / 100).toFixed(2);

    return (
    <div className='cart-summary' style={style || {}}>
        <h4>Total:</h4>
        <span>$ <strong>{total}</strong></span>
        <div className='cart-checkout'>checkout</div>
    </div>);
};

const Cart = ({items, style}) => {

    return (
    <div className='cart' style={style || {}}>
        {items.length > 0 ? 
        <div className='cart-items'>
            {items.map((item, index) => {
                return (<CartItem key={index} data={item}/>);
            })}
        </div> :
        <CartEmpty/>}
        <CartSummary items={items}/>
    </div>);
};

export default Cart;