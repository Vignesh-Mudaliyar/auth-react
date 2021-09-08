// import React, {  useEffect,useState } from "react";
import Navvbar from "../../components/Navbar";
import { Table } from "react-bootstrap";
import Loader from "react-loader-spinner";
import useApi from '../../hooks/useApi'
// import { AuthContext } from "../../App";
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent";

 
export default function Dashboard() {
    const hj='ddd';
    const ll='jjj';
    Cookies.set(hj,ll);
   
    const history = useHistory();
    const {data,loading} = useApi("https://reqres.in/api/users"); 

   const handleClick= () => {
     Cookies.remove('login');
    history.push('/login');
  }


 
  return (
    <>
      <Navvbar brand="Vibrant" Home="Home" />
      <div className="my-3 d-flex align-items-center flex-column" >
         {loading ?  <Table striped bordered hover  style={{maxWidth:'700px'}}> 
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead> 
          <tbody>
               {data.map((value) => (
                  <tr key={value.id}>
                      <td>{`0${value.id}`}</td>
                      <td>{value.first_name}</td>
                      <td>{value.last_name}</td>
                      <td>{value.email}</td>
                  </tr>
              )) }
          </tbody> 
        </Table> : <div className="text-center"> <Loader
        type="Puff"
        color="black"
        height={80}
        width={80}
      
        /> </div>}
      </div>
     <div className="d-flex justify-content-center" > <div  style={{maxWidth: '100px'}}><ButtonComponent handleClick={handleClick} type="button" label="Sign Out"  /></div></div>
    </>
  );
}
