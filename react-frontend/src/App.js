import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from "./component/HeaderComponent"
import FooterComponent from "./component/FooterComponenet"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';
import ViewEmployeeComponent from './component/ViewEmployeeComponent';
function App() {

  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/" exact component={ListEmployeeComponent}></Route>
              <Route path = "/employees" component={ListEmployeeComponent}></Route>
              <Route path = "/add-employee/:id" component={CreateEmployeeComponent}></Route>
              <Route path = "/view-employee/:id" component={ViewEmployeeComponent}></Route>
              {/* <Route path = "/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}
            
            </Switch>
          </div>
          <FooterComponent />
      
      </Router>
    </div>

  );
}

export default App;
