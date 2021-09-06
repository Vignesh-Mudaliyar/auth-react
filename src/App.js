import PersonalDetails from './Authentication/personalDetails';
import Login from './Authentication/Login';
import SignUp from './Authentication/Signup';
import Dashboard from './Dashboard';
import PrivateRoute from './Authentication/privateRoute'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import 'react-notifications/lib/notifications.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState } from 'react';


export const AuthContext = React.createContext();
export default function App() {

  const [authUser,setAuthUser] = useState(false);

  

  return (
    <AuthContext.Provider value={{authUser:authUser,setAuthUser:setAuthUser}}>
    <Router>
      <Switch>
       
      <PrivateRoute exact path="/"  component={Dashboard} /> 
      <Route path="/auth-react/pdetails" component={PersonalDetails} /> 
      <Route path="/auth-react/login" component={Login} /> 
      <Route path="/auth-react/signup" component={SignUp} /> 
      
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
}


 
