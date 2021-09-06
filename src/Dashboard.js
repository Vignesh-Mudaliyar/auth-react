import React, { useContext, useEffect,useState } from "react";
import Navvbar from "./components/Navbar";
import { Table,Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { AuthContext } from "./App";

export default function Dashboard() {

    const [data,setData] =useState([]);
    const [loading,setLoading] =useState(false);
    const {setAuthUser} = useContext(AuthContext);

  useEffect(() => {
    fetch(
      "https://reqres.in/api/users"
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);

        setTimeout(() => {
            setData(result.data);
            setLoading(true);
        },700)
     
      });
  }, []);
  return (
    <>
      <Navvbar />
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
               {data.map((value,index) => (
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
      <div className="text-center"><Button onClick={() => setAuthUser(false)} >Sign out</Button></div>
    </>
  );
}
