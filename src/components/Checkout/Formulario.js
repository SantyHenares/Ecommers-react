import React from 'react';
import './Checkout.css';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
 
 const Formulario = (exito, submitHandler ) => {

   return (
     <Formik
       initialValues={{ firstName: '', lastName: '', email: '' }}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
        submitHandler(values);
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
        <h1>Check out</h1>
        <p>Ingresa tus datos para finalizar la compra.</p>
        <div className='contenedor-form d-flex justify-content-center'>
        <input name='name' type="text" className="form-control" placeholder="Name" aria-label="Name"/>
            <ErrorMessage name="name" />
        </div>

        <div className='contenedor-form d-flex justify-content-center'>
             <input name='phone' type="text" className="form-control" placeholder="Phone" aria-label="Phone"/>
            <ErrorMessage name="phone" />
        </div>
         
        <div className='contenedor-form d-flex justify-content-center'>
            <input name='email' type="email" className="form-control" placeholder="Email" aria-label="Email"/>
            <ErrorMessage name="email" />
        </div>
         
        <button type='submit'  onClick={() => exito()} className='btn btn-dark'>Finalizar compra</button>
       </Form>
     </Formik>
   );
 };

 export default Formulario