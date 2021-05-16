import React from "react";
import { isEmailValid, isPhoneValid } from "../utils/index";

export default class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  nextStep = e => {
    e.preventDefault();
    let { fname, lname, email, phone } = this.props.values;
    if (fname.trim() == "" || lname.trim() == "" || email.trim() == "") {
      this.setState({
        error: "Please fulfill all the required sections(*)"
      });
      return;
    }
    if (!isEmailValid(email)) {
      this.setState({
        error: "Input email address is invalid"
      });
      return;
    }
    if (!isPhoneValid(phone)) {
      this.setState({
        error: "Input phone number is invalid"
      });
      return;
    }
    this.props.nextStep();
  };

  render() {
    return (
      <div className="form-group">
        {this.state.error && (
          <div className="error-message" data-testid="details-error">
            {this.state.error}
          </div>
        )}
        <label>First Name*</label>
        <input
          className="form-control"
          data-testid="fname"
          id="fname"
          name="fname"
          type="text"
          placeholder="Enter First Name..."
          value={this.props.values.fname}
          onChange={event => this.props.onChange(event)}
        />
        <label>Last Name*</label>
        <input
          className="form-control"
          data-testid="lname"
          id="lname"
          name="lname"
          type="text"
          placeholder="Enter Last Name..."
          value={this.props.values.lname}
          onChange={event => this.props.onChange(event)}
        />
        <label>Email Address*</label>
        <input
          className="form-control"
          data-testid="email"
          id="email"
          name="email"
          type="text"
          placeholder="name@example.com"
          value={this.props.values.email}
          onChange={event => this.props.onChange(event)}
        />
        <label>Phone Number</label>
        <input
          className="form-control"
          data-testid="phone"
          id="phone"
          name="phone"
          type="text"
          placeholder="Enter Phone Number..."
          value={this.props.values.phone}
          onChange={event => this.props.onChange(event)}
        />
        <div className="btn-group">
          <button
            className="btn btn-primary"
            data-testid="continue-first"
            type="button"
            onClick={this.nextStep}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
