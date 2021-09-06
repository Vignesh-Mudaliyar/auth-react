import React from 'react';
import {Form} from 'react-bootstrap';

export default function InputComponent({label,pHolder,handleEvent,value,vClass,errText,type="text"}) {
    return (
        <Form.Group className="my-3">
                    <Form.Label>{label}</Form.Label>
                    <Form.Control  type={type} value={value} className={vClass} onChange={handleEvent} onBlur={handleEvent} placeholder={pHolder} />
                    <Form.Text className="text-danger">{errText}</Form.Text>
         </Form.Group>
    )
}
