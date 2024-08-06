import React from 'react';
import ReactFormValidation from "react-form-input-validation";
import { Row, Col } from 'react-bootstrap';

class ModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                f_name: "",
                l_name: "",
                email: "",
                phone: "",
                service: "",
                appointment_date: "",
                message: ""
            },
            errors: {}
        };

        this.form = new ReactFormValidation(this, { locale: "en" });

        this.form.useRules({
            f_name: "required",
            l_name: "required",
            email: "required|email",
            phone: "required|numeric",
            service: "required",
            appointment_date: "required|date",
            message: "required|max:200"
        });
    }

    render() {
        return (
            <form className="appointment-form" noValidate autoComplete="off" onSubmit={this.form.handleSubmit}>
                <Row>
                    <Col md="6">
                        <p className="form-box">
                            <input
                                type="text"
                                name="f_name"
                                className="form-control"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.f_name}
                                placeholder="First Name"
                                data-attribute-name="First Name"
                                data-async
                            />
                            <label className="error">{this.state.errors.f_name ? this.state.errors.f_name : ""}</label>
                        </p>
                    </Col>
                    <Col md="6">
                        <p className="form-box">
                            <input
                                type="text"
                                name="l_name"
                                className="form-control"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.l_name}
                                placeholder="Last Name"
                                data-attribute-name="Last Name"
                                data-async
                            />
                            <label className="error">{this.state.errors.l_name ? this.state.errors.l_name : ""}</label>
                        </p>
                    </Col>
                    <Col md="6">
                        <p className="form-box">
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.email}
                                placeholder="Email Address"
                                data-attribute-name="Email Address"
                                data-async
                            />
                            <label className="error">{this.state.errors.email ? this.state.errors.email : ""}</label>
                        </p>
                    </Col>
                    <Col md="6">
                        <p className="form-box">
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.phone}
                                placeholder="Phone"
                            />
                            <label className="error">{this.state.errors.phone ? this.state.errors.phone : ""}</label>
                        </p>
                    </Col>
                    <Col md="6">
                        <p className="form-box">
                            <select
                                id="service"
                                name="service"
                                className="form-control"
                                value={this.state.fields.service}
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                            >
                                <option value="">Select Service</option>
                                <option value="office">Office Cleaning</option>
                                <option value="home">Home Cleaning</option>
                                <option value="shop">Shop Cleaning</option>
                            </select>
                            <label className="error">{this.state.errors.service ? this.state.errors.service : ""}</label>
                        </p>
                    </Col>
                    <Col md="6">
                        <p className="form-box">
                            <input
                                type="date"
                                name="appointment_date"
                                className="form-control"
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                                value={this.state.fields.appointment_date}
                                placeholder="Date"
                            />
                            <label className="error">{this.state.errors.appointment_date ? this.state.errors.appointment_date : ""}</label>
                        </p>
                    </Col>
                    <Col md="12">
                        <p className="form-box">
                            <textarea
                                name="message"
                                maxLength="200"
                                className="form-control"
                                value={this.state.fields.message}
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                                placeholder="Message"
                            ></textarea>
                            <label className="error">{this.state.errors.message ? this.state.errors.message : ""}</label>
                        </p>
                    </Col>
                    <Col md="12" className="text-center">
                        <button type="submit">Send Request</button>
                    </Col>
                </Row>
            </form>
        );
    }
}

export default ModalForm;
