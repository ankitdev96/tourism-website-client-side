import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import About from './Components/AboutUs/About';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import Add from './Components/Add/Add';
import BuyService from './Components/BuyService/BuyService';
import MyOrders from './Components/MyOrders/MyOrders';

function App() {
  return (
    <div className="App">
     <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>


          <Route path = "/login">
            <Login></Login>
          </Route>

            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>

            <PrivateRoute exact path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>

            <PrivateRoute exact path="/add">
              <Add></Add>
            </PrivateRoute>

            <PrivateRoute exact path="/myorder">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute exact path="/buy/:serviceId">
              <BuyService></BuyService>
            </PrivateRoute>

            

          



          </Switch>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
