import React from 'react';

const Thankyou = props => {
  const { fname, lname, emailid,  city, phone } =
  (props.location && props.location.state) || {};
  return (
    <div id="wrapper">
    <div className="container py-5">
      <table className='table  w-50 m-auto'>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{fname}</td>
            <td>{lname}</td>
            <td>{emailid}</td>
            <td>{phone}</td>
            <td>{city}</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
  );
};

export default Thankyou;
