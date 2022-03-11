import React from "react";
import Axios from 'axios';
import Redirect from 'react-dom';
import { Link, NavLink,Navigate} from 'react-router-dom';


export default class Q1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  componentDidMount() {

  }

  Action = () =>{
    let counter = this.val.value;
    // let counter = prompt("Enter the number");
    if(counter < 3 || counter > 30){
        counter = 5;
        alert("Value must be between 3 to 30 else default(5) will be applied. ")
    }
let pattern = "";
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        // pattern += '*';
        if(i<j){
            pattern += counter +" ";
        }
        else{
            pattern += '* ';
        }

    }    
    pattern +='<br/>';
    counter--;
}
 
document.getElementById('result').innerHTML = pattern;
// alert(pattern);
}

  render() {


    return (
      <>
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
          <a class="navbar-brand p-3" href="#">Q1 Create the following pattern: (HTML + JS)</a>
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
                      <div className="row">
                      <div className="col-6 d-flex justify-content-end align-items-center">
                      <label for="val">Enter Value of N :</label>
                          </div>
                        <div className="col-6 d-flex align-items-center">
                          <div className="input-group my-3">
                            <input id="val" onChange={()=>this.Action()} type="number" name="val" ref={(val) => this.val = val} className="form-control" required />
                          </div>
                        </div>
                       
                      </div>
                     

                    <div id="result" className="d-flex justify-content-center"></div>

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