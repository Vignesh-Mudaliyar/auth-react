import React,{useState} from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PersonalDetails from '../Pages/Modules/personalDetails'
import ButtonComponent from './ButtonComponent';
// import ButtonComponent from './ButtonComponent';

export default function Navvbar({brand,Home}) {

    const [show,setShow] =useState(false);
    const [showProfile,setShowProfile] =useState(false);
    const [showBtn,setShowBtn] =useState(false);
    return (
        <>
        <Navbar bg="dark" variant="dark">
         
        <Container>
        <Link className="text-decoration-none" to="/"><Navbar.Brand>{brand}</Navbar.Brand></Link>
        <Nav className="me-auto">
        <Link className="text-decoration-none" to="/">  <Nav.Link>{Home}</Nav.Link></Link>
        </Nav>
       
              {!showBtn ? <ButtonComponent type="button" label="Add Profile Details" handleClick={() => setShow(true)} mt={1} /> :
              <ButtonComponent type="button" label="Profile Details" handleClick={() => setShowProfile(true)} mt={1} />}
        </Container>
        
      </Navbar>

     
          <PersonalDetails label="Profile Details" show={show} setShow={setShow} setShowBtn={setShowBtn} showProfile={showProfile} setShowProfile={setShowProfile} />
      
      </>
    )
}
