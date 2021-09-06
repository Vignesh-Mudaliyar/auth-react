import React from 'react';
import {Container} from 'react-bootstrap';

export default function CenteredContainer({children}) {
    return (
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="w-100 px-5 py-4 rounded border"
          style={{ maxWidth: "500px", backgroundColor: "rgb(189, 220, 238)" }}
        >
            {children}
        </div>
        </Container>
    )
}
