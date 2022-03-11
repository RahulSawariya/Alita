import React from "react";
import Axios from 'axios';
import Redirect from 'react-dom';
import { Link, NavLink,Navigate} from 'react-router-dom';


export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  componentDidMount() {

  }

  render() {


    return (
      <>
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
          <a class="navbar-brand p-3" href="#">USER</a>
          <div class="navbar-nav">
          </div>
        </nav>
        <body>
          <div className="container-fluid" style={{ height: "90vh" }}>
            <div className="row d-flex justify-content-center align-items-center" style={{ height: "inherit" }}>

              <div className="col-4" >
                <div className="card" >
                <div className="card-header text-center">
                <strong>Q1 Create the following pattern: (HTML + JS)</strong>
                  </div>
                  <div className="card-body">
                    Enter value of N: 5 <br/>
                    * 5 4 3 2 1 <br/>
                    * * 4 3 2 1 <br/>
                    * * * 3 2 1 <br/>
                    * * * * 2 1 <br/>
                    * * * * * 1 <br/>
                    - Set default value 5. <br/>
                    - Update the pattern immediately on change of an input value. <br/>
                    - Restrict the input value from 3 to 30. <br/>

                  </div>

                  <div className="card-footer text-center">
                  <div className="row d-flex justify-content-around">

                        <Link className="btn btn-primary col-5" to={'/q1'}>Check</Link>
                      </div>
                  </div>
</div>

                </div>
                <div className="col-4" >
                <div className="card" >
                <div className="card-header text-center">
                <strong>Q2 Create the React application to perform simple Math operation <br/>
(Div, Mul, Sub, Add)</strong>
                  </div>
                  
                  <div className="card-body">
                    - Create two textbox: value1, value2 and operator drop-down for Math operation <br/>
                    - Set default values: <br/>
                    value1: 60.20, value2: 30, operator: Add (+) <br/>
                    - Build an expression as label in the next line with result. <br/>
                    Expression: 60.20 + 30.75 = 90.95 <br/>
                    - On every change of value1/value2/operator update the expression. <br/>
                  </div>

                  <div className="card-footer text-center">
                  <div className="row d-flex justify-content-around">
                  <Link className="btn btn-primary col-5" to={'/q2'}>Check</Link>
                      </div>
                  </div>

                </div>
              </div>

              <div className="col-4" >
                <div className="card" >
                <div className="card-header text-center">
                <strong>Q3 Create CRUD app (React, Axios, Bootstrap)</strong>
                  </div>
                  <div className="card-body">
                  - Visit URL https://gorest.co.in/ and login. <br/>
                  - Generate token here: https://gorest.co.in/my-account/access-tokens <br/>
                  - Consume the following users API https://gorest.co.in/public/v2/users with token generated above. <br/>
                  - Page should contains add user button at the top (use modal to add), table filled with users record and action column with delete/update buttons.<br/>
                  </div>

                  <div className="card-footer text-center">
                  <div className="row d-flex justify-content-around">
                  <Link className="btn btn-primary col-5" to={'/q3'}>Check</Link>
                      </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </body>
      </>
    );

  }
}