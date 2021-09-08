import React from 'react';
import {Button} from 'react-bootstrap';

export default function ButtonComponent({label,disable='',type='button',handleClick=()=>{},mt=5,wClass=''}) {
    return ( 
    <div className={`text-center ${wClass} mt-${mt}`}><Button disabled={disable} className="w-100" type={type} onClick={handleClick} >{label}</Button></div>
    )
}
 