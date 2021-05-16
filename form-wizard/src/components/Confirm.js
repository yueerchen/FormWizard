import React from "react";

export default class Confirm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      fname,
      lname,
      email,
      phone,
      stNumber,
      stName,
      stType,
      suburb,
      postcode
    } = this.props.values;
    return (
      <table className="data-table">
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{fname}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{lname}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Street Number</td>
            <td>{stNumber}</td>
          </tr>
          <tr>
            <td>Street Name</td>
            <td>{stName}</td>
          </tr>
          <tr>
            <td>Street Type</td>
            <td>{stType}</td>
          </tr>
          <tr>
            <td>Suburb</td>
            <td>{suburb}</td>
          </tr>
          <tr>
            <td>Postcode</td>
            <td>{postcode}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
