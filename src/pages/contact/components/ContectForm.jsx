import React from 'react';
import ReactFormValidation from "react-form-input-validation";
import { Row, Col } from 'react-bootstrap';
import { Styles } from "../styles/contactForm.jsx";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                f_name: "",
                l_name: "",
                email: "",
                phone: "",
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
            message: "required|max:200"
        });
    }

    render() {
        return (
            <Styles>
                <form className="contact-form" noValidate autoComplete="off" onSubmit={this.form.handleSubmit}>
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
                                    data-attribute-name="first name"
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
                                    data-attribute-name="last name"
                                    data-async
                                />
                                <label className="error">{this.state.errors.l_name ? this.state.errors.l_name : ""}</label>
                            </p>
                        </Col>
                        <Col md="12">
                            <p className="form-box">
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    onBlur={this.form.handleBlurEvent}
                                    onChange={this.form.handleChangeEvent}
                                    value={this.state.fields.email}
                                    placeholder="Email Address"
                                    data-attribute-name="email"
                                    data-async
                                />
                                <label className="error">{this.state.errors.email ? this.state.errors.email : ""}</label>
                            </p>
                        </Col>
                        <Col md="12">
                            <p className="form-box">
                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    onBlur={this.form.handleBlurEvent}
                                    onChange={this.form.handleChangeEvent}
                                    value={this.state.fields.phone}
                                    placeholder="Phone Number"
                                    data-attribute-name="phone"
                                />
                                <label className="error">{this.state.errors.phone ? this.state.errors.phone : ""}</label>
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
                                    data-attribute-name="message"
                                ></textarea>
                                <label className="error">{this.state.errors.message ? this.state.errors.message : ""}</label>
                            </p>
                        </Col>
                        <Col md="12">
                            <button type="submit">Send Message</button>
                        </Col>
                    </Row>
                </form>
            </Styles>
        );
    }
}

export default ContactForm;
