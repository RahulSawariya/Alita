import React from "react";
import Axios from 'axios';
import Redirect from 'react-dom';
import { Link, NavLink,Navigate} from 'react-router-dom';
import { event } from "jquery";


export default class Q2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      val1 : '60.20',
      val2 : '30',
    }
  }
  componentDidMount() {

  }

  Action = (event) =>{
    event.preventDefault();
    event.persist();
    let val1 = this.state.val1;
    let val2 = this.state.val2;
    let operation = this.op.value;
    let result = '';
    // alert(operation)
    if(operation == 'add'){
        let ans = parseFloat(val1) + parseFloat(val2);
        result = val1 + ' + ' + val2 + ' = ' + ans;
    }
    else if(operation == 'sub'){
        let ans = parseFloat(val1) - parseFloat(val2);
        result = val1 + ' - ' + val2 + ' = ' + ans;
    }
    else if(operation == 'mul'){
        let ans = parseFloat(val1) * parseFloat(val2);
        result = val1 + ' * ' + val2 + ' = ' + ans;
    }
    else{
        let ans = parseFloat(val1) / parseFloat(val2);
        result = val1 + ' / ' + val2 + ' = ' + ans;
    }

    document.getElementById('result').innerHTML = result;
    }

  render() {


    return (
      <>
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
          <a class="navbar-brand p-3" href="#">Q2 Create the React application to perform simple Math operation (Div, Mul, Sub, Add)</a>
          <div class="navbar-nav">
          </div>
        </nav>
        <body>
          <div className="container-fluid" style={{ height: "90vh" }}>
            <div className="row d-flex justify-content-center align-items-center" style={{ height: "inherit" }}>

              <div className="col-10" >
                <div className="card" >
                <div className="card-header text-center">
                <strong>Result</strong>
                  </div>
                  <div className="card-body">

                  <form onSubmit={this.Action}>
                      <div className="row d-flex justify-content-evenly">
                      <div className="col-3 d-flex justify-content-end align-items-center">
                      <label for="val" className="px-2">Value1: </label>
                      <div className="input-group my-3">
                            <input value={this.state.val1} onChange={(e)=>this.setState({val1:e.target.value})} id="val1" type="number" name="val1" ref={(val) => this.val1 = val} className="form-control" required/>
                          </div>
                          </div>
                          <div className="col-3 d-flex justify-content-end align-items-center">
                      <label for="val2" className="px-2">Value2: </label>
                      <div className="input-group my-3">
                            <input value={this.state.val2} onChange={(e)=>this.setState({val2:e.target.value})} id="val2" type="number" name="val2" ref={(val) => this.val2 = val} className="form-control" required/>
                          </div>
                          </div>
                          <div className="col-3 d-flex justify-content-end align-items-center">
                      <label for="op" className="px-2">Operator: </label>
                      <div className="input-group my-3">
                            <select id="op" name="op" ref={(val) => this.op = val}>
                                <option value="add" selected>Add(+)</option>
                                <option value="sub">Sub(-)</option>
                                <option value="mul">Mul(*)</option>
                                <option value="div">Div(/)</option>

                            </select>
                          </div>
                          </div>
                       
                      </div>

                      <div className="row d-flex justify-content-around">
                        <button type="submit" className="btn btn-primary col-2">Submit</button>
                      </div>

                      </form>
                     

                    <div id="result" className="d-flex justify-content-center align-items-center" style={{height:"100px",fontSize:"20px"}}></div>

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