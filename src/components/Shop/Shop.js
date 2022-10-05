import React, {useState} from 'react';
import './Shop.css';
import * as yup from 'yup';
import { Formik } from 'formik';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useCartContext } from '../../context/CartContext';

const yupSchema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required()
})
.required();

const Shop = () => {
    const {cartList, totalPrice} = useCartContext();
    const [orderId, setOrderId] = useState(null);
    
    const submitHandler = (values, resetForm) => {
        resetForm();
        const order = {
            buyer: values,
            items: cartList,
            total: totalPrice
        };
    
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(({id}) => setOrderId(id));
    }

  return (
    <div className='container'>
        <h1>Check out</h1>
        <Formik initialValues={{name:'', phone:'', email:'', }}
            onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
            validationSchema={yupSchema}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isValid,
                    dirty,
                })=>(
            <form onSubmit={handleSubmit}>
                <div className='contenedor-form d-flex justify-content-center'>
                    <input value={values.name} onChange={handleChange} onBlur={handleBlur} name='name' type="text" className="form-control" placeholder="Name" aria-label="Name"/>
                </div>
                <div className='contenedor-form d-flex justify-content-center'>
                    <input value={values.phone} onChange={handleChange} onBlur={handleBlur} name='phone' type="text" className="form-control" placeholder="Phone" aria-label="Phone"/>
                </div>
                <div className='contenedor-form d-flex justify-content-center'>
                    <input value={values.email} onChange={handleChange} onBlur={handleBlur} name='email' type="email" className="form-control" placeholder="E-mail" aria-label="E-mail"/>
                </div>
                <button type='submit' className='btn btn-dark'>Submit</button>
            </form>)}
        </Formik>
    </div>
    )
}

export default Shop