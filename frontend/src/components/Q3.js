import React from "react";
import Axios from 'axios';
import {Link,Navigate,NavLink} from 'react-router-dom';
import $ from "jquery";
import dt from 'datatables.net-responsive-dt';
import Modal from 'react-modal'

export default class Q3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      RedirectState: false,
      server: '',
      ExistingUsers:[],
      modelIsOpenForEdit:false,
      modelIsOpenForDelete:false,
      modelIsOpenForResponse:false,
      user:'',
      id:'',
      name:'',
      email:'',
      gender:'',
      response:'',
    }
  }

  componentDidMount() {
    Axios.get('https://gorest.co.in/public/v2/users')
      .then(function (res) {
        if (res) {
          // console.log(res.data[0]['id']);
          this.setState({ExistingUsers:res.data});
          var dataTable = $('#table').DataTable({
            responsive: true,
            "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                //debugger;
                var index = iDisplayIndexFull + 1;
                $("td:first", nRow).html(index);
                return nRow;
            },
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
                { responsivePriority: 1, targets: -1 },
                { responsivePriority: 2, targets: 1 },
                { responsivePriority: 3, targets: 0 }
            ]
        });
        }
        else if (res.data.valid == false) {
          alert(res.data.value.msg);
        }
        else {
          alert(res);
          console.log(res);
        }
      }
        .bind(this))
        .catch(function (error) {
        console.log(error);
      });

  }

  FillForm = (data) =>{
    this.setState({
      user:data.id,
      id:data.id,
      name:data.name,
      email:data.email,
      gender:data.gender,
      modelIsOpenForEdit:true});
  }

  EditUser = (event) => {
  }

  DeleteUser = () => {
  }

  render() {
   
    return (
      <>
 <nav class="navbar navbar-dark bg-primary navbar-expand-lg ">
 <a class="navbar-brand p-3" href="#">Q3 Create CRUD app (React, Axios, Bootstrap)</a>
          <div class="navbar-nav">
          </div>
        </nav>
        <body>
     
          <div className="container-fluid" style={{height:"100vh"}}>
            <div className="row d-flex justify-content-center align-items-center" style={{height:"100%"}}>
            
              <div className="col-10" >
                <div className="card" style={{height:"90vh"}}>
                  <div className="card-header text-center">
                    <div>Exisiting Users</div>
                  </div>
                  <div className="card-body" style={{overflow:"auto"}}>
                  <table id="table" class="table table-hover">
  <thead style={{position:"sticky",top:"-16px",background:"white"}}>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {this.state.ExistingUsers.map((data) =>
    <tr>
      <td></td>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.gender}</td>
      <td>{data.status}</td>

      <td className="d-flex justify-content-around">
        <button className="btn btn-primary" title="Edit" onClick={()=>this.FillForm(data)}><i class="far fa-edit"></i></button>
      <button className="btn btn-danger" title="Delete" onClick={()=>this.setState({modelIsOpenForDelete:true,user:data.id})}><i class="far fa-trash-alt"></i></button></td>
    </tr>
  )}
  </tbody>
</table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>

        <Modal isOpen={this.state.modelIsOpenForEdit} className="popup-modal-content" overlayClassName="popup-modal" onRequestClose={() => this.setState({ modelIsOpenForEdit: false })}>
        <span class="closed" type="button" style={{ fontSize: "32px", position: "absolute", zIndex: "1", right: "3%", height: "6.7vh", lineHeight: "6.7vh" }} onClick={() => this.setState({ modelIsOpenForEdit: false })}>&times;</span>                    
        <div className="card" >
                  <div className="card-header text-center">
                    <div>Create New User</div>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.EditUser}>
                      
                          <div className="input-group mb-3">
                            <input defaultValue={this.state.name} type="text" name="name" ref={(val) => this.name = val} className="form-control" placeholder="First Name" required />
                          </div>
                        
                      <div className="input-group mb-3">
                            <input defaultValue={this.state.email} type="email" name="email" ref={(val) => this.email = val} className="form-control" placeholder="Email" required />
                          </div>
                      <div className="input-group mb-3">
                        <input defaultValue={this.state.gender} type="text" name="gender" ref={(val) => this.gender = val} className="form-control" placeholder="Address" required />
                      </div>
                      <div className="row d-flex justify-content-around">
                        <button type="submit" className="btn btn-primary col-5" disabled>Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
        </Modal>

        <Modal isOpen={this.state.modelIsOpenForDelete} className="popup-modal-content" overlayClassName="popup-modal" onRequestClose={() => this.setState({ modelIsOpenForDelete: false })}>
        <span class="closed" type="button" style={{ fontSize: "32px", position: "absolute", zIndex: "1", right: "3%", height: "6.7vh", lineHeight: "6.7vh" }} onClick={() => this.setState({ modelIsOpenForDelete: false })}>&times;</span>                    
        <div className="card" >
                  <div className="card-header text-center">
                    <div>Are you sure ?</div>
                  </div>
                  <div className="card-body text-center">
                    <button onClick={()=>this.DeleteUser()} className="btn btn-danger col-5" disabled>Submit</button>
                  </div>
                </div>
        </Modal>

      </>
    );
      
  }
}