import axios from 'axios'
import React, { useState } from 'react'

const AddDonor = () => {
    const[input,changeInput ]=useState({
    donor_name: "",
    age: "",
    gender: "",
    blood_group: "",
    phone: "",
    email: "",
    city: "",
    weight_kg: "",
    last_donation_date: "",
    created_at: "",

    })
const inputHandler=(event)=>
{
    changeInput({...input,[event.target.name]:event.target.value})
}
const readValue =()=>{
    console.log(input);
    axios.post("https://host-demo-app.onrender.com/api/add-donor").then(
        (response)=>{
            console.log(response.data);

        }
    )
    .catch()
}
  return (
    <div>
        <div className="container">
                <div className="row">
                    <h1><b>ADD DONOR</b></h1>
                    <br></br>
                    <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label  className="form-label">donor_name </label>
                                <input type="text" 
                                className="form-control"
                                name="donor_name" 
                                value={input.donor_name}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label  className="form-label">age</label>
                                <input type="number" 
                                className="form-control" 
                                 name="age" 
                                value={input.age}
                                onChange={inputHandler}/>
                            </div>
                             <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">gender</label>
                                <select className="form-select" name="gender" value={input.gender} onChange={inputHandler}>
                                    <option value="">male</option>
                                     <option value="">female</option>
                                      <option value="">other</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">blood_group</label>
                                <select className="form-select" name="blood_group" value={input.blood_group} onChange={inputHandler}>
                                    <option value="">A+</option>
                                     <option value="">A-</option>
                                     <option value="">B+</option>
                                     <option value="">B-</option>
                                     <option value="">AB+</option>
                                       <option value="">AB-</option>
                                     <option value="">O+</option>
                                     <option value="">O-</option>
                                </select>
                            </div>
                           
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">phone</label>
                               <input type="tel"
                                 className="form-control"
                            name="trainer" 
                                value={input.phone}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">email</label>
                               <input type="text"
                                 className="form-control"
                                 name="email" 
                                value={input.email}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">city</label>
                               <input type="text"
                                 className="form-control"
                                 name="city" 
                                value={input.city}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">weight_kg</label>
                               <input type="number"
                                 className="form-control"
                                 name="weight_kg" 
                                value={input.weight_kg}
                                onChange={inputHandler}/>
                            </div>
                                  <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">last_donation_date</label>
                               <input type="number"
                                 className="form-control"
                                 name="last_donation_date" 
                                value={input.last_donation_date}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    </div>
  )
}
