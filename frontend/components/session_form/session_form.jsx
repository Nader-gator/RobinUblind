import React from 'react'

class SessionForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.formAction(user)
  }

  renderErrors() {
    
    const mappedErros = this.props.errors.map((el,idx) => {
      return (
        <li key={`error-${idx}`}>
            {el}
        </li>)
    })
    return (
      <ul>
        {mappedErros}
      </ul>
      )
    
  }



  render() {
    return <main id="login-form">
        <div className="login-form-submit-container">

        <img className="login-img" src={window.loginimgURL} />
          <form onSubmit={this.handleSubmit} className="loginform">
            <h1>Welcome to RobinUblind!</h1>
            <div className="login-greet">Please {this.props.formType}</div>
            {this.props.navLink}
            
            <div className="login-fields">
              <label className="field-label">
                Email
                <input className="login-inputs" type="text" value={this.state.email} onChange={this.update("email")} />
              </label>

              <br />
              <br />

              <label className="field-label">
                Password
                <input className="login-inputs" type="password" value={this.state.password} onChange={this.update("password")} />
              </label>
            </div>

            <div className="login-error">
              {this.renderErrors()}
            </div>

       
           

            <input className="login-form-submit" type="submit" value={this.props.formType} />
          </form>
        </div>
      </main>;
  }

}

export default SessionForm 