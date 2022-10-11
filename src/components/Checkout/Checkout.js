import React, {useState} from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import Formulario  from './Formulario';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/FirebaseConfig';
import { useCartContext } from '../../context/CartContext';

const Checkout = () => {
    const {cartList, totalPrice, clear} = useCartContext();
    const [orderId, setOrderId] = useState(null);
    
    const submitHandler = (values) => {
        
        const order = {
            buyer: {...values},
            items: [...cartList],
            total: totalPrice()
        };
    
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(({id}) => setOrderId(id));
    }

    if(orderId != null){ 
        clear() 
    };

    if(orderId == null){
      return (
        <div>
            <Formulario submitHandler={submitHandler}/>
        </div>
        )
    }else{
        return(
            <div>
                <h1 className='py-5 my-5'>¡Felicitaciones por su compra!</h1>
                <Link to={`/`} style={{textDecoration: 'none'}}>
                    <button type="button" className="btn btn-dark">Volver al home</button>
                </Link>
            </div>
        )
    }

}

export default Checkout