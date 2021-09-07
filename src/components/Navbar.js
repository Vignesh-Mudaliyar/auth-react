import React from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';

export default function Navvbar({brand,Home}) {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/">{brand}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">{Home}</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}
