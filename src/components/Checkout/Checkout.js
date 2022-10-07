import React, {useState} from 'react';
import './Checkout.css';
import Formulario  from './Formulario';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useCartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

const Checkout = () => {
    const {cartList, totalPrice, clear} = useCartContext();
    const [orderId, setOrderId] = useState(null);

    const exito = () => {
        clear();
        Swal.fire(
          'Felicitaciones',
          'Su compra fue un exiro!',
          'success'
        )
      }
    
    const submitHandler = (values) => {
        const order = {
            buyer: values,
            items: cartList,
            total: totalPrice
        };
    
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(({id}) => setOrderId(id));
        console.log(orderId);
    }

  return (
    <div>
        <Formulario exito={exito} submitHandler={submitHandler}/>
    </div>
    )
}

export default Checkout