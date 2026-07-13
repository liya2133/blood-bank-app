import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'



const AddDonor = () => {
    const[input,changeInput]=useState(
        {  donor_name: "",  
            age: "",  
            gender: "",  
            blood_group: "",  
            phone: "",  
            email: "",  
            city: "",  
            weight_kg: "",  
            last_donation_date: ""
        })

        const inputHandler = event =>{
            changeInput({...input,[event.target.name]:event.target.value})
         }

         const readvalue=()=>{

         console.log(input)
         axios.post("https://host-demo-app.onrender.com/api/add-donor",input).then(

         (response)=>{

         console.log(response.data)
         }
 ).catch() 
 }

  return (
    <div>
        <Nav />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Donor Name</label>
                            <input type="text" className="form-control" name="donor_name" value={input.donor_name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Age</label>
                            <input type="number" className="form-control" name="age" value={input.age} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gender</label>
                            <select name="" id="" className="form-control" name="gender" value={input.gender} onChange={inputHandler}>
                                <option value="Select mode">Select Mode</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">BloodGroup</label>
                            <select name="" id="" className="form-control" name="blood_group" value={input.blood_group} onChange={inputHandler}>
                                <option value="select mode">Select Mode</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="num" className="form-control" name="phone" value={input.phone} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">City</label>
                            <input type="text" className="form-control" name="city" value={input.city} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Weight-kg</label>
                            <input type="text" className="form-control" name="weight_kg" value={input.weight_kg} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">last-dontion-date</label>
                            <input type="date" name="" id="" className="form-control" name="last_donation_date" value={input.last_donation_date} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddDonor;