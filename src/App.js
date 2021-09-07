import PersonalDetails from './Pages/Modules/personalDetails';
import Login from './Pages/Modules/Login';
import SignUp from './Pages/Modules/Signup';
import Dashboard from './Pages/Modules/Dashboard';
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
      <Route path="/pdetails" component={PersonalDetails} /> 
      <Route path="/login" component={Login} /> 
      <Route path="/signup" component={SignUp} /> 
      
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
}


 
