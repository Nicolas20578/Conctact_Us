import React, { useRef, useState } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser'


export const ContactUs = () => {

    const [inputText,setInputText] = useState('');
    const [savedData,setSavedData] = useState(false);

    const handleInputChange = (event) => {
        const text = event.target.value
        setInputText(text);
        console.log(inputText);

        if (text === '') {
            setSavedData(false)
        }
    }

    const saveData = () => {
        localStorage.setItem('correo', inputText);
        alert('has guardado tu correo');
        setSavedData(true);
    }

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_li06cx7"
        const templateId = "template_jbfeife"
        const apiKey = "ITuywKcToL1g8LDSx"

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
        .then( result => console.log(result.text))
        .catch( error => console.error(error) )
    }


  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="header-contact">
            <h2>Contact Us</h2>
            <p>Please fill this form</p>
        </div>
        <fieldset className='field-name'>
            <label className='symbol-required name' htmlFor="">Name</label>
            <input name='username' type="text" placeholder='Ej: Nicolas Dev' required />
        </fieldset>
        <fieldset className='field-email'>
            <label className='symbol-required name' htmlFor="">Email</label>
            <input placeholder='Ej: nicolas@gmail.com' type="email" name="email" required />
        </fieldset>
        <fieldset className='field-message'>
            <label className='symbol-required'>Message</label>
            <textarea maxLength="500" placeholder="type yout message" name="message" id="" cols="30" rows="10"></textarea>
        </fieldset>
        <button className='btn-send'>Send</button>
    </form>
  )
}
