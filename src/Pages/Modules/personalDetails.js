import React, { useState, useEffect } from 'react'
import {  Form,Modal, ListGroup} from 'react-bootstrap';
// import { useHistory} from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import InputComponent from '../../components/Input';
import ButtonComponent from '../../components/ButtonComponent';
// import CenteredContainer from '../../components/centeredContainer';
// import Cookies from 'js-cookie';



export default function PersonalDetails({label,show,setShow,showProfile,setShowProfile,setShowBtn}) {
    
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [pNumber, setPNumber] = useState('');
    const [age, setAge] = useState('');
    const [date, setDate] = useState('');
    const [disable, setDisable] = useState(true);
    const [validate, setValidate] = useState({ fNameText: '', fNameClass: '', lNameText: '', lNameClass: '', pNumberClass: '', pNumberText: '', dobClass: '', dobText: '' })
    const [data, setData] = useState([]);
    const [fileText,setFileText] = useState('');
    const [img,setImg] =useState('');
  

    const handleFName = (e) => {
        setFname(e.target.value);
        if (e.target.value.length > 5) {

            setValidate({ ...validate, fNameClass: 'is-valid', fNameText: '' })
        }
        else {
            setValidate({ ...validate, fNameClass: 'is-invalid', fNameText: 'Please enter atleast 5 characters' })

        }

    }

    const handleLName = (e) => {
        setLname(e.target.value);
        if (e.target.value.length > 5) {

            setValidate({ ...validate, lNameClass: 'is-valid', lNameText: '' })
        }
        else {
            setValidate({ ...validate, lNameClass: 'is-invalid', lNameText: 'Please enter atleast 5 characters' })

        }

    }

    const handlepNumber = (e) => {
        let value = e.target.value;


        setPNumber(value);
       


        if (e.target.value.length > 10) {
            value = value.slice(0, 10);
            setPNumber(value);

        }

        if (value.match(/^\d{10}$/)) {
            setValidate({ ...validate, pNumberClass: 'is-valid', pNumberText: '' })
        }
        else {
            setValidate({ ...validate, pNumberClass: 'is-invalid', pNumberText: 'Please enter a valid phone number' })
        }
    }

    const handleDOB = (e) => {
        if (e.target.value.length >= 10) {
            setDate(e.target.value);
            setValidate({ ...validate, dobClass: 'is-valid', dobText: '' });

            let birthDate = new Date(e.target.value).getFullYear();
            let currentDate = new Date().getFullYear();

            setAge(currentDate - birthDate)
        }
        else {
            setValidate({ ...validate, dobClass: 'is-invalid', dobText: 'Please select a proper Date' })
        }
       
    }

    const handleImgFile = (e) => {
      
      const value= e.target.value;
      console.log(e)
      setImg(e.target.value)
        let extnsion = value.slice(value.indexOf('.') + 1,value.length);

      

      if(extnsion === 'png' || extnsion === 'jpg' || extnsion === 'jpeg')
      {
          
          setFileText('');    
      }
      else{
          setFileText('please upload image file. (jpg/jpeg or png)');
          setImg('');  
      }

        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setData([{ firstName: fName, lastName: lName, phoneNumber: pNumber, date: date, Age: age,imgPath: img,show:true }]);
        

        setFname('');
        setLname('');
        setPNumber('');
        setDate('');
        setAge('');


        setValidate({ fNameClass: '', lNameClass: '', pNumberClass: '', dobClass: '' });

        NotificationManager.success('Data Added successfully ');
        setShow(false);
        setShowBtn(true);

    }
    useEffect(() =>{
        console.log(data);
    },[data])

    useEffect(() => {
       
        if (fName.length >= 5 && lName.length >= 5 && pNumber.match(/^\d{10}$/) && date.length >= 10 && img !== '') {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }, [fName, lName, pNumber, date,img]); 

    return (
        
 <>
           <Modal show={show} onHide={() => setShow(false)}>
               <Modal.Header>
                    <h1 className="text-center">{label}</h1>
                    </Modal.Header>

                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                    
                    <InputComponent
                        label="First Name"
                        value={fName}
                        vClass={validate.fNameClass}
                        handleEvent={handleFName}
                        pHolder="Enter first name"
                        errText={validate.fNameText}
                    />

                     <InputComponent
                        label="Last Name"
                        value={lName}
                        vClass={validate.lNameClass}
                        handleEvent={handleLName}
                        pHolder="Enter last name"
                        errText={validate.lNameText}
                    />

                    <InputComponent
                        label="Mobile Number"
                        value={pNumber}
                        vClass={validate.pNumberClass}
                        handleEvent={handlepNumber}
                        pHolder="Enter mobile number"
                        errText={validate.pNumberText}
                    />

                    <InputComponent
                        label="Date of Birth"
                        value={date}
                        vClass={validate.dobClass}
                        handleEvent={handleDOB}
                        errText={validate.dobText}
                        type="date"
                    />

                    <Form.Group className="my-3">
                        <Form.Label> Age</Form.Label>
                        <Form.Control type="text" value={age} readOnly />
                    </Form.Group>

                    <Form.Group  className="my-3 ">
                                <Form.Label>Upload Image</Form.Label><br />
                              <Form.Control type="file" accept=".png,.jpg,.jpeg" className="is-invalid border border-secondary rounded"  onChange={handleImgFile} onBlur={handleImgFile}/> <br />
                              <Form.Text className="text-danger">{fileText}</Form.Text>
                    </Form.Group>
        </Modal.Body>
        <Modal.Footer>
                    <ButtonComponent disable={disable} type="submit" label="Submit" mt={1} wClass="w-100" />
             </Modal.Footer>
                </Form>
           
            </Modal>
            <NotificationContainer />

            <Modal  show={showProfile} onHide={() => setShowProfile(false)}>
                <Modal.Header>
                   <h2> Profile Details</h2>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item><b>First Name: </b>   {data[0]?.firstName} </ListGroup.Item> 
                        <ListGroup.Item><b>Last Name:  </b>   {data[0]?.lastName} </ListGroup.Item> 
                        <ListGroup.Item><b>PhoneNumber:</b>   {data[0]?.phoneNumber}</ListGroup.Item> 
                        <ListGroup.Item><b>Birth date: </b>   {data[0]?.date}</ListGroup.Item> 
                        <ListGroup.Item><b>Age:-        </b>{data[0]?.Age} </ListGroup.Item> 
                        </ListGroup>
                </Modal.Body>
            </Modal>
            
     </>
    )
}
