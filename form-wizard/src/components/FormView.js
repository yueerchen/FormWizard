import React from "react";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import ProgressBar from "./ProgressBar";
import Confirm from "./Confirm";

export default class FormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 3,
      currentStep: 1,
      fname: "",
      lname: "",
      email: "",
      phone: "",
      stNumber: "",
      stName: "",
      stType: "",
      suburb: "",
      postcode: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert("Submit Success");
  };

  // go to the next step
  nextStep = () => {
    let { currentStep } = this.state;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  // go to the previous step
  previousStep = () => {
    let { currentStep } = this.state;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  render() {
    const { currentStep } = this.state;
    const {
      fname,
      lname,
      email,
      phone,
      stNumber,
      stName,
      stType,
      suburb,
      postcode
    } = this.state;
    const values = {
      fname,
      lname,
      email,
      phone,
      stNumber,
      stName,
      stType,
      suburb,
      postcode
    };

    switch (currentStep) {
      case 1:
        return (
          <React.Fragment>
            <h2>Enter your basic information 🧙‍♂️</h2>
            <div data-testid="step-one">
              <p>
                Step {this.state.currentStep} / {this.state.steps}
              </p>
              <ProgressBar step={this.state.currentStep} />
            </div>
            <form className="form-container" onSubmit={this.handleSubmit}>
              <PersonalDetails
                values={values}
                onChange={this.handleChange}
                nextStep={this.nextStep}
              />
            </form>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <h2>Enter your address 🧙‍♂️</h2>
            <div data-testid="step-two">
              <p>
                Step {this.state.currentStep} / {this.state.steps}
              </p>
              <ProgressBar step={this.state.currentStep} />
            </div>
            <form className="form-container" onSubmit={this.handleSubmit}>
              <Address
                values={values}
                onChange={this.handleChange}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
              />
            </form>
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <h2>Your submitted data 🧙‍♂️</h2>
            <div>
              <p>
                Step {this.state.currentStep} / {this.state.steps}
              </p>
              <ProgressBar step={this.state.currentStep} />
            </div>
            <form className="form-container" onSubmit={this.handleSubmit}>
              <Confirm values={values} />
              <div className="btn-group">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={this.previousStep}
                >
                  Previous
                </button>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </React.Fragment>
        );
    }
  }
}
