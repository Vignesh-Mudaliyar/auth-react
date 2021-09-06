import React, { useContext } from 'react'
import {Redirect,Route} from 'react-router-dom';
import {AuthContext} from  '../App'

export default function PrivateRoute({component:Component,...rest}) {

    const {authUser} = useContext(AuthContext);
    console.log(authUser)
    return (
        <Route {...rest} render={props => {
            return authUser ? <Component {...props} /> : <Redirect to="/auth-react/login" />
        }}></Route>
    )
}
