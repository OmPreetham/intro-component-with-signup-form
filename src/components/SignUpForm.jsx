import { useState } from 'react'

const SignUpForm = () => {
  // TODO: Add Validation functionality with React

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const toggleFirstNameChange = (value) => {
    setFirstName(value)
  }

  const toggleLastNameChange = (value) => {
    setLastName(value)
  }

  const toggleEmailChange = (value) => {
    setEmail(value)
  }

  const togglePasswordChange = (value) => {
    setPassword(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (firstName === '') {
    }
  }

  console.log(firstName, lastName, email, password)

  return (
    <div className="wrapper">
      <main>
        <div className="layout-wrapper">
          <section>
            <div className="left-wrapper">
              <h1>Learn to code by watching others</h1>
              <p>
                See how experienced developers solve problems in real-time.
                Watching scripted tutorials is great, but understanding how
                developers think is invaluable.
              </p>
            </div>
          </section>
          <section>
            <div className="right-wrapper">
              <div className="banner-wrapper">
                <p>
                  <span>Try it free 7 days</span> then $20/mo. thereafter
                </p>
              </div>
              <div className="form-wrapper">
                <form action="">
                  <div className="firstname-wrapper">
                    <label className="firstname" htmlFor="firstname">
                      First Name
                    </label>
                    <input
                      onChange={(e) => toggleFirstNameChange(e.target.value)}
                      className="firstname"
                      type="text"
                      name="firstname"
                      value={firstName}
                      id="firstname"
                      placeholder="First Name"
                    />
                    <img
                      className="error-icon1"
                      src="/images/icon-error.svg"
                      alt="Error Icon"
                    />
                    <p>
                      <i>First name cannot be empty</i>
                    </p>
                  </div>
                  <div className="lastname-wrapper">
                    <label className="lastname" htmlFor="lastname">
                      Last Name
                    </label>
                    <input
                      onChange={(e) => toggleLastNameChange(e.target.value)}
                      className="lastname"
                      type="text"
                      name="lastname"
                      value={lastName}
                      id="lastname"
                      placeholder="Last Name"
                    />
                    <img
                      className="error-icon2"
                      src="/images/icon-error.svg"
                      alt="Error Icon"
                    />
                    <p>
                      <i>Last Name cannot be empty</i>
                    </p>
                  </div>
                  <div className="email-wrapper">
                    <label className="email" htmlFor="email">
                      Email
                    </label>
                    <input
                      onChange={(e) => toggleEmailChange(e.target.value)}
                      className="email"
                      type="email"
                      name="email"
                      value={email}
                      id="email"
                      placeholder="Email Address"
                    />
                    <img
                      className="error-icon3"
                      src="/images/icon-error.svg"
                      alt="Error Icon"
                    />
                    <p>
                      <i>Looks like this is not an email</i>
                    </p>
                  </div>
                  <div className="password-wrapper">
                    <label className="password" htmlFor="password">
                      Password
                    </label>
                    <input
                      onChange={(e) => togglePasswordChange(e.target.value)}
                      className="password"
                      type="password"
                      name="password"
                      value={password}
                      id="password"
                      placeholder="Password"
                    />
                    <img
                      className="error-icon4"
                      src="/images/icon-error.svg"
                      alt="Error Icon"
                    />
                    <p>
                      <i>Password cannot be empty</i>
                    </p>
                  </div>
                  <button type="submit">Claim your free trail</button>
                </form>
                <p className="ts">
                  By clicking the button, you are agreeing to our{' '}
                  <a href="">Terms and Services</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
export default SignUpForm
