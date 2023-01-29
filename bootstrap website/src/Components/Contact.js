import { React, useState } from 'react'
import Axios from 'axios';
import ContactImg from '../Images/contact.jpg';
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [text, setText] = useState("");
  const [rate, setRate] = useState("");
  const getFeedback = () => {
    Axios.post('http://localhost:3005/api/insert', {
      name: name,
      age: age,
      email: email,
      text: text,
      rate: rate,
    })
  };
  return (
    <div className='section contact bg-info'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='text-center fw-bold fs-1 mb-4'>Contact Us</h2>
          </div>
          <div className='col-md-6 my-4'>
            <div className='card m-auto  w-75'>
              <div className='card-body'>
                <form method='get'>
                  <input type="text" className='form-control' name="name" placeholder="enter your name" onChange={(e) => { setName(e.target.value); }} /><br />
                  <input type="text" className='form-control' name="email" placeholder="enter your email" onChange={(e) => { setEmail(e.target.value); }} /><br />
                  <input type="text" className='form-control' name="age" placeholder="select your age" onChange={(e) => { setAge(e.target.value); }} /><br />
                  <textarea name="text1" className='form-control' placeholder="message..." onChange={(e) => { setText(e.target.value); }} /><br />
                  <select name="rate" className='form-control' onChange={(e) => { setRate(e.target.value); }}>
                    <option>select rating</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select><br />
                  <button onClick={getFeedback} className="collectBtn btn">Submit</button><br />
                </form>
              </div>
            </div>
          </div>
          <div className='col-md-6 pt-4'>
            <div className='card m-auto w-75'>
              <div className='card-body fw-bold'>
                <img src={ContactImg} className="w-100 conImg mb-5" alt=""/>
                <strong className='mb-5'>Address:-</strong>
                <p>Bbc Chowk,Muz</p>
                <p>Bihar- 842001</p>
                <p>Mobile: +91-8767091245 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
