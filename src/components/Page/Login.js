import React, { Component, useState } from 'react';
import './Login.css';

export default function Login() {
    const [data , setData]=useState(null)
    fetch("./data.json").then(
        function(res){
        return res.json()
      }).then(function(data){
        setData(data)
    }).catch(
      function(err){
        console.log(err, ' error')
      }
    )
    return (
        <>
            <section className="myform-area">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-8">
                          <div className="form-area login-form">
                              <div className="form-content">
                                  <h2>Login</h2>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non aperiam cum quas quod reprehenderit.</p>
                                  <ul>
                                      <li><i className="fa fa-facebook-f"></i><span>facebook</span></li>
                                      <li><i className="fa fa-twitter"></i><span>twitter</span></li>
                                  </ul>
                              </div>
                              <div className="form-input">
                                  <h2>Login Form</h2>
                                  <form>
                                      <div className="form-group">
                                          <input type="text"  id="" name="name" required />
                                          <label>User Name</label>
                                      </div>
                                      <div className="form-group">
                                          <input type="password" id="" name="password" required />
                                          <label>password</label>
                                      </div>
                                      <div className="myform-button">
                                          <button className="myform-btn">Login</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </>
    )
}