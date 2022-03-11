import React, { Component } from 'react';


function validate(name, email, password) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];
  
    if (name.length === 0) {
      errors.push("Name can't be empty");
    }
  
    if (email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }
  
    if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }
  
    return errors;
  }
  

export default class Form extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
      
            errors: [],
          };
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
    
        const { name, email, password } = this.state;
    
        const errors = validate(name, email, password);
        if (errors.length > 0) {
          this.setState({ errors });
            return;
        }
    
        // submit the data...
     }
    
      render() {
        const { errors } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            {errors.map((error) => (
              <p key={error}>Error: {error}</p>
            ))}
            <div className='form-group mt-3'>
              <label className='mb-2' for='userEmail'>Email address</label>
              <input
                id="userEmail"
                value={this.state.name}
                onChange={(evt) => this.setState({ name: evt.target.value })}
                type="text"
                placeholder="User Email"
                className='form-control'
              />
            </div>
            <div className='form-group mt-3'>
              <label className='mb-2' for="userPwd">Password</label>
              <input
                id='userPwd'
                value={this.state.email}
                onChange={(evt) => this.setState({ email: evt.target.value })}
                type="text"
                placeholder="User Password"
                className='form-control'
              />
            </div>
            <div className='form-group mt-3'>
              <label className='mb-2' for="cnfuserPwd">Confirm Password</label>
              <input
                id='cnfuserPwd'
                value={this.state.password}
                onChange={(evt) => this.setState({ password: evt.target.value })}
                type="password"
                placeholder="Confirm Password"
                className='form-control'
              />
            </div>
            <div className='form-group frm-action text-center d-block w-100'>
              <button type="submit" className=" mt-4 btn btn-primary">Submit</button>
            </div>
          </form>
        );
      }
}





