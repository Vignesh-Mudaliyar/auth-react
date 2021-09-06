import React from 'react';
import {Button} from 'react-bootstrap';

export default function ButtonComponent({label,disable,type='button'}) {
    return ( 
    <div className="text-center mt-5"><Button disabled={disable} className="w-100" type={type} >{label}</Button></div>
    )
}
