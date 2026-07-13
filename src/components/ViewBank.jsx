import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'


const ViewBank = () => {
    const [data,changeData] = useState([])
    const fetchData =()=>{
        axios.get("https://host-demo-app.onrender.com/api/donors").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        () => {
            fetchData()
        },[]
    )
  return (
    <div>
        <Nav />
            <div className="container mt-4">
        <h2 className="text-center mb-4">
          <b><i>View Course</i></b>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">donor_name</th>
              <th scope="col">age</th>
              <th scope="col">gender</th>
              <th scope="col">blood_group</th>
              <th scope="col">phone</th>
              <th scope="col">email</th>
              <th scope="col">city</th>
              <th scope="col">weight_kg</th>
              <th scope="col">last_donation_date</th>
            </tr>
          </thead>
          
                <tbody>
                  {
                    data.map
                    (
                        (value,index)=>{
                            return(
                                <tr>
                                    <td>{value.donor_name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.blood_group}</td>
                                    <td>{value.email}</td>
                                    <td>{value.city}</td>
                                    <td>{value.weight_kg}</td>
                                    <td>{value.last_donation_date}</td>
                                </tr>
                            )
                        }

                    )}
          </tbody>
             
          
        </table>
      </div>


    </div>
  )
}

export default ViewBank;