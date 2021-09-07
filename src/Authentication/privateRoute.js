// import React, { useContext } from 'react'
import {Redirect,Route} from 'react-router-dom';
// import {AuthContext} from  '../App'
import Cookies from "js-cookie";

export default function PrivateRoute({component:Component,...rest}) {

    const user =Cookies.get('login');
    
    return (
        <Route {...rest} render={props => {
            return user ? <Component {...props} /> : <Redirect to="/login" />
        }}></Route>
    )
}
