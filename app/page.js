"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {collection, addDoc} from "firebase/firestore";
import { db } from './temps/firebase';




export default function Home() {
  const [name, setName]=useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false);



  useEffect(() => { 
    validateForm(); 
}, [name, email]); 
// Validate form 
const validateForm = () => { 
    let errors = {}; 

    if (!name) { 
        // errors.name = '*Name is required.'; 
    } 

    if (!email) { 
        // errors.email = '*Email is required.'; 
    } else if  (!/\S+@\S+\.\S+/.test(email)) { 
        // errors.email = '*Email is invalid.'; 
    }

    setErrors(errors); 
    setIsFormValid(Object.keys(errors).length === 0); 
};

  const addRequest =async(e) =>{
    e.preventDefault();
    if (isFormValid){
      try{
        var time = new Date().getTime();
        var date = new Date(time);
        const docRef = await addDoc(collection(db, "requests"),{name:name, email:email,message:message, requestTime:date });
        sendEmail();
        alert("Thank you for your request, we will reach out very soon");
        console.log("A request logged with id: ", docRef.id);

        setEmail("");
        setName("");
        setMessage("");
        <Link href="/"></Link>
  
      }catch(e){console.error("Error in adding a request")};

    }     


  };

  // Nodemailer section
  function sendEmail(){

        let data = {
          name,
          email,
          message
      }
      
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true) 
              setName('')
              setEmail('')
              setMessage('')
          }
      })
      };
  


  return (
<div>
      {/* Header section */}
      <header className=" body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-500 ">
    <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="">     
      <span className="ml-3 text-2xl ">Twoven services</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            
    </nav>
     

  </div>
</header>

{/* Content section */}
<section className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto  ">
    <div className="flex flex-col text-center w-full mb-20  ">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 ">About Twoven services</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Twoven limited is a registered company in Kenya that offer consultations and other services in the digital world for over two years now. We have a strong expertise in different technologies and systems used in day to day business activities.</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Microsoft Dynamics</h2> <hr/>
        <p className="leading-relaxed text-base mb-4"><strong> MS Dynamics ERP</strong> system installation, configuration and data migration from other accouting systems. <br/> <br/>
        <strong> MS Dynamics CRM</strong> system installation, configuration and integration with other systems.
        </p>
        
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Power BI reports</h2> <hr/>
        <p className="leading-relaxed text-base mb-4">We help you transition from manual reports to <strong>power BI dashboards</strong> that refresh data automatically from the system database. <br/>
        We also setup <strong>data gateways</strong> to securely connect data in your local server to the cloud.
        </p>
        
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Power Apps</h2> <hr/>
        <p className="leading-relaxed text-base mb-4">We create low-code applications using power Apps platform by Microsoft. <br/> With a combination of <strong>power Apps</strong> and <strong>Power automation</strong> technologies, we create a robust sytem based on your needs.  </p>
        
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Training consultation</h2> <hr/>
        <p className="leading-relaxed text-base mb-4">We offer trainings on how to get started in the <strong>digital platform</strong>. <br/>If you want to learn how to use or create different systems, we got you covered. <br/>
        If you are an admin and stuck somewhere, reach out for assistance.
         </p>
        
      </div>
    </div>
    
  </div>
</section>

{/* Content section */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">I received very good Quality analysis, data cleaning and power BI dashboards services. Joseph and his team were able to identify key data improvements in our various projects. <br/>
          They have valuable expertise in power BI reporting.
          </p>
          <a className="inline-flex items-center">
            
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Patrick Egbunonu</span>
              <span className="text-gray-500 text-sm">CANADA</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">I now understand how different Microsoft products works and what I want to implement in my company after few hours of training. <br/>
          We went through Microsoft <strong>dynamics ERP and CRM, Dataverse, Power BI, Gateway and office 365.</strong> <br/>
          This is very important to me. 
           </p>
          <a className="inline-flex items-center">
            
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Domingo</span>
              <span className="text-gray-500 text-sm">United Kingdom</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Contact section */}
<section className="text-gray-600 body-font relative" id='contact'>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1> <hr/>
      
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" value={name} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e)=>setName(e.target.value)}/>
            {errors.name && <p className="text-sm text-red-900">{errors.name}</p>}
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" value={email} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             onChange={(e)=>setEmail(e.target.value)} />
             {errors.name && <p className="text-sm text-red-900">{errors.email}</p>}
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" value={message} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={(e)=>setMessage(e.target.value)}></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button type='submit' disabled={!name || !email} onClick={addRequest} className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Send</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer section */}
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="ml-3 text-sm">Twoven services</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Twoven: +254 702 349 145 </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link className="text-gray-500" href="https://www.facebook.com/MachariaJoseMwangi/">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </Link>
      <Link className="ml-3 text-gray-500" href="https://twitter.com/twoven_ltd">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </Link>
      <Link className="ml-3 text-gray-500" href="">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </Link>
      <Link className="ml-3 text-gray-500" href="https://ke.linkedin.com/in/joseph-mwangi-macharia">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </Link>
    </span>
  </div>
</footer>

</div>
  )
}
