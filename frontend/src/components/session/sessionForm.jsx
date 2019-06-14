import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.populateState();
    }

    populateState() {
        // eslint-disable-next-line
        this.state = (this.props.formType === 'Sign Up') ? {
            first_name: "",
            last_name: "",
            email: "",
            date_of_birth: "",
            gender: "",
            password: "",
            password_confirmed: ""
        } : {
                email: "",
                password: ""
            };
    }

    handleInput(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
        this.populateState();
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.processForm({
            email: 'email3@domain.com',
            password: 'password'
        })
    }

    renderErrors() {
        if (this.props.errors.errorList && this.props.errors.type === this.props.formType) return (
            <ul className='error-list'>
                {this.props.errors.errorList.map((err, idx) => (
                    <li key={idx}>{err}</li>
                ))}
            </ul>
        );
    }

    renderSignUpForm() {
        return (
            <form className='signup-form' onSubmit={this.handleSubmit.bind(this)}>
                <div className="name-input-fields">
                    <input id="first-name" placeholder="First name" type="text" value={this.state.first_name} onChange={this.handleInput("first_name")} />
                    <input id="last-name" placeholder="Last name" type="text" value={this.state.last_name} onChange={this.handleInput("last_name")} />
                </div>

                <div className="email-input-field">
                    <input placeholder="Email" type="text" value={this.state.email} onChange={this.handleInput("email")} />
                </div>
                <div className="password-input-field">
                    <input placeholder="New password" type="password" value={this.state.password} onChange={this.handleInput("password")} />
                </div>
                <div className="password-confirmation-input-field">
                    <input placeholder="Confirm password" type="password" value={this.state.password_confirmed} onChange={this.handleInput("password_confirmed")} />
                </div>

                <div className="birthday-input-field">
                    <label htmlFor="birthday">Birthday</label>
                    <input id="birthday" type="date" value={this.state.date_of_birth} onChange={this.handleInput("date_of_birth")} />
                </div>

                <div className="gender-input-field">
                    <label>
                        <input type="radio" value='Female' onChange={this.handleInput("gender")} />Female
                        </label>
                    <label>
                        <input type="radio" value='Male' onChange={this.handleInput("gender")} />Male
                    </label>
                </div>
                <div className="button">
                    <button className="signup-button">{this.props.formType}</button>
                </div>
            </form>
        );
    }

    renderLogInForm() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                </div>
                <div className="buttons">
                    <button className='login-button'>{this.props.formType}</button>
                    <button className='demo-login-button' onClick={this.demoLogin.bind(this)}>Demo Login</button>
                </div>
            </form>
        )
    }

    render() {
        return (
            <div>
                {this.renderErrors()}
                {(this.props.formType === 'Sign Up') ? this.renderSignUpForm() : this.renderLogInForm()}
            </div>
        );
    }
}

export default SessionForm;