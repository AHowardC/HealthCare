import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button, Col} from 'react-bootstrap';


class Register extends Component{
	constructor(){
		super();
		this.state = {
			error: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
		var formData = {
			fullname: event.target[0].value,
			DOB: event.target[1].value,
			PhoneNumber: event.target[2].value,
			InsuranceCarrier: event.target[3].value,
			InsuranceID: event.target[4].value,
		}

		if(formData.fullname === ""){
			this.setState({
				error: "Name field cannot be empty.",
				// type: "error"
			})
		}else{
			this.props.authAction(formData);
		}
	}

	render(){

		if(this.state.type === "error"){
			// var msgClass = "text-danger"
		}
		return(
			<Form horizontal onSubmit={this.handleSubmit}>
				<h2 className="bg-danger"></h2>
	        <FormGroup controlId="formHorizontalError" validationState={this.state.nameError}>
	            <Col componentClass={ControlLabel} sm={2}>
	                Full Name
	            </Col>
	            <Col sm={10}>
	                <FormControl type="text" name="fullName" placeholder="Full Name" />
	            </Col>
	        </FormGroup>

	        <FormGroup controlId="formHorizontalName" validationState={this.state.DOBError}>
	            <Col componentClass={ControlLabel} sm={2}>
	                Date Of Birth
	            </Col>
	            <Col sm={10}>
	                <FormControl type="text" name="DOB" placeholder="Date Of Birth" />
	            </Col>
	        </FormGroup>

	        <FormGroup controlId="formHorizontalPhoneNumber">
	            <Col componentClass={ControlLabel} sm={2}>
	                Phone Number
	            </Col>
	            <Col sm={10}>
	                <FormControl type="text" name="PhoneNumber" placeholder='Phone Number' />
	            </Col>
	        </FormGroup>

	        <FormGroup controlId="formHorizontalInsuranceCarrier">
	            <Col componentClass={ControlLabel} sm={2}>
	                Insurance Carrier
	            </Col>
	            <Col sm={10}>
	                <FormControl type="text" name="InsuranceCarrier" placeholder="Insurance Carrier" />
	            </Col>
	        </FormGroup>

	        <FormGroup controlId="formHorizontalInsuranceID">
	            <Col componentClass={ControlLabel} sm={2}>
	                Insurance ID
	            </Col>
	            <Col sm={10}>
	                <FormControl type="text" name="InsuranceID" placeholder="InsuranceID" />
	            </Col>
	        </FormGroup>

	        <FormGroup>
	            <Col smOffset={2} sm={10}>
	                <Button bsStyle="primary" bsSize="large" type="submit">
	                    Register
	                </Button>
	            </Col>
	        </FormGroup>
	    </Form>
		)
	}
}

export default Register;
