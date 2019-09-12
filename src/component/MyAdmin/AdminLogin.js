import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import MyAdmin from './MyAdmin'

class FormPage extends React.Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }
    login=()=>{
        let {email,password} = this.state;
        let data ={
            email,
            password
        }
        if(email==="khatumal@admin.com"&&password==="admin"){
            localStorage.setItem("loginData",JSON.stringify(data))
          this.props.history.push('/dashboard');
    }

    }
    render(){

        return (
            <MDBContainer>
      <MyAdmin/>
      <MDBRow center>
        <MDBCol md="6">
          <form style={{margin: '50px'}}>
            <p className="h4 text-center mb-4">Sign in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
              onChange={(e)=>this.setState({email:e.target.value})}
              />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              onChange={(e)=>this.setState({password:e.target.value})}
              />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit" onClick={()=>this.login()}>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
};

export default FormPage;