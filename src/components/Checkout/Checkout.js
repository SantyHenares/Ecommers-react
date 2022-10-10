import React, {useState} from 'react';
import './Checkout.css';
import Formulario  from './Formulario';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useCartContext } from '../../context/CartContext';

const Checkout = () => {
    const {cartList, totalPrice} = useCartContext();
    const [orderId, setOrderId] = useState(null);
    
    const submitHandler = (values) => {
        const order = {
            buyer: {...values},
            items: [...cartList],
            total: totalPrice()
        };
    
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(({id}) => setOrderId(id));
        console.log(totalPrice());
    }

  return (
    <div>
        <Formulario submitHandler={submitHandler}/>
    </div>
    )
}

export default Checkout