import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from "react-bootstrap";
import ProductBox from './ProductBox';

export default function ProductList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Revive Kraft Bowl 16 oz | 500 ml', image: 'http://ecopack.me/public/uploads/products/1-EP_KP_005_Revive_Kraft_Bowl_500ml.png', },
    { id: 2, name: 'Revive Kraft Bowl 24 oz | 750 ml', image: '' },
    { id: 3, name: 'Revive Kraft Bowl 24 oz | 750 ml', image: ''},
    { id: 4, name: 'Revive Kraft Bowl 24 oz | 750 ml', image: ''},
    { id: 5, name: 'Revive Kraft Bowl 24 oz | 750 ml', image: ''}
  ]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);


  return (
    <div className="container">
      <h3 className="p-3 text-center">React - Display a list of items</h3>
      <table className="table table-striped table-bordered">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
              </tr>
          </thead>
          <tbody>
              {users && users.map(user =>
                  <tr key={user.id}>
                      <td>{user.firstName} {user.lastName}</td>
                      <td>{user.email}</td>
                      <td><img src={user.image} className="img-responsive" alt={user.firstName} /></td>
                      <td><Button onClick={handleShow} >CLick To open</Button></td>
                  </tr>
              )}
          </tbody>
      </table>
      <ProductBox />
      <div id="myModal" className="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h3 id="myModalLabel">Modal header</h3>
        </div>
        <div className="modal-body">
          <p>One fine body…</p>
        </div>
        <div className="modal-footer">
          <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
          <button className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  );
}



