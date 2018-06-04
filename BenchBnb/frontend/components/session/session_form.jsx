import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange(input, e) {
    this.setState({ [input]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/"));
  }

  render() {

    const otherFormPath = this.props.match.path === '/login' ? ('/signup'):('/login');
    const otherFormName = otherFormPath === '/login' ? ("Login"):("Signup");
    const showErrors = !(this.props.errors.length) ? ("") : (
      <ul>
        {this.props.errors.map((error, id) => <li key={id}>{error}</li>)}
      </ul>
    );
    return(
      <div>
        <h3>{this.props.formType}</h3>
        {showErrors}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={(e) => this.handleChange("username", e)}
              />
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => this.handleChange("password", e)}
              />
          </label>
          <input
            type="submit"
            value={this.props.formType}
            />
        </form>
        <Link to={otherFormPath}>{otherFormName}</Link>
      </div>
    );
  }
}

export default SessionForm;
