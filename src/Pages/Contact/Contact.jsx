/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Card from '../../Components/Card/Card.jsx'
import ContactMethods from '../../data/contact.js'
import '../../Pages/Contact/Contact.css'

function createContactUs(contactmethods){
  return <Card cardID='contactsCard' header={contactmethods.header} title={contactmethods.title} text={contactmethods.text} buttonText={contactmethods.buttonText} />
}

function Contact() {
  return (
    <div className='container'>
        <h1>Contact Customer Service</h1>
        <br/>
        <hr/>
        <h4>Call us from the Netflix app</h4>
        <p>Contacting Netflix is now easier than ever when you contact us from the Netflix app on your Android or iOS phone or tablet! 
          Calling through the app is free - all you need is an internet or cellular connection.</p>
        <h6>Download the Netflix app:</h6>


        <p>Questions? <a href='' className='btn btn-link' id='questionsLink'>Learn how to contact us from the Netflix app!</a></p>
        {ContactMethods.map(createContactUs)}
        <br/>
        <br/>
    </div>
  )
}

export default Contact;