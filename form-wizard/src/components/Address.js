import React from "react";
import { isPostcodeValid, isStreetNumberValid } from "../utils/index";

export default class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  nextStep = e => {
    e.preventDefault();
    let { stNumber, stName, stType, suburb, postcode } = this.props.values;
    if (
      stNumber.trim() == "" ||
      stName.trim() == "" ||
      stType.trim() == "" ||
      suburb.trim() == "" ||
      postcode.trim() == ""
    ) {
      this.setState({
        error: "Please fulfill all the required sections(*)"
      });
      return;
    }
    if (!isStreetNumberValid(stNumber)) {
      this.setState({
        error: "Input street number is invalid"
      });
      return;
    }
    if (!isPostcodeValid(postcode)) {
      this.setState({
        error: "Input postcode is invalid, please enter code in range 0800-7999"
      });
      return;
    }
    this.props.nextStep();
  };

  render() {
    return (
      <div className="form-group">
        {this.state.error && (
          <div className="error-message" data-testid="details-error-second">
            {this.state.error}
          </div>
        )}
        <label htmlFor="stNumber">Street Number*</label>
        <input
          className="form-control"
          data-testid="stNumber"
          id="stNumber"
          name="stNumber"
          type="text"
          placeholder="Enter Street Number..."
          value={this.props.values.stNumber}
          onChange={event => this.props.onChange(event)}
        />
        <label htmlFor="stName">Street Name*</label>
        <input
          className="form-control"
          data-testid="stName"
          id="stName"
          name="stName"
          type="text"
          placeholder="Enter Street Name..."
          value={this.props.values.stName}
          onChange={event => this.props.onChange(event)}
        />
        <label htmlFor="stType">Street Type*</label>
        <select
          name="stType"
          data-testid="stType"
          value={this.props.values.stType}
          onChange={event => this.props.onChange(event)}
        >
          <option value=""></option>
          <option value="Cl">Cl</option>
          <option value="Ct">Ct</option>
          <option value="St">St</option>
          <option value="Pl">Pl</option>
          <option value="Ave">Ave</option>
        </select>
        <label htmlFor="suburb">Suburb*</label>
        <input
          className="form-control"
          data-testid="suburb"
          id="suburb"
          name="suburb"
          type="text"
          placeholder="Enter Suburb..."
          required
          value={this.props.values.suburb}
          onChange={event => this.props.onChange(event)}
        />
        <label htmlFor="postcode">Postcode*</label>
        <input
          className="form-control"
          data-testid="postcode"
          id="postcode"
          name="postcode"
          type="text"
          placeholder="Enter Postcode..."
          required
          value={this.props.values.postcode}
          onChange={event => this.props.onChange(event)}
        />
        <div className="btn-group">
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.props.previousStep}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            data-testid="continue-second"
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
