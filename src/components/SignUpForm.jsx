import { useState } from 'react'

const SignUpForm = () => {
  // TODO: Add Validation functionality with React

  const EMAIL_REGEX = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [inputError, setInputError] = useState(false)
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const [signUp, setSignUp] = useState(false)

  const toggleFirstNameChange = (inputFirstName) => {
    setFirstName(inputFirstName)
    if (inputFirstName === '') {
      setFirstNameError(true)
      return
    }
    setFirstNameError(false)
  }

  const toggleLastNameChange = (inputLastName) => {
    setLastName(inputLastName)
    if (inputLastName === '') {
      setLastNameError(true)
      return
    }
    setLastNameError(false)
  }

  const toggleEmailChange = (inputEmail) => {
    setEmail(inputEmail)
    if (inputEmail.match(EMAIL_REGEX)) {
      setEmailError(false)
      return
    }
    setEmailError(true)
  }

  const togglePasswordChange = (inputPassword) => {
    setPassword(inputPassword)
    if (inputPassword.match(PASSWORD_REGEX)) {
      setPasswordError(false)
      return
    }
    setPasswordError(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      firstName === '' ||
      lastName === '' ||
      !email.match(EMAIL_REGEX) ||
      password === ''
    ) {
      if (firstName === '') {
        setFirstNameError(true)
      }
      if (lastName === '') {
        setLastNameError(true)
      }
      if (!email.match(EMAIL_REGEX)) {
        setEmailError(true)
      }
      if (!password.match(PASSWORD_REGEX)) {
        setPasswordError(true)
      }
    } else {
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setSignUp(true)
    }
  }

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
                <form onSubmit={handleSubmit} action="">
                  <div className="firstname-wrapper">
                    <label className="firstname" htmlFor="firstname">
                      First Name
                    </label>
                    <input
                      onChange={(e) => toggleFirstNameChange(e.target.value)}
                      className={firstNameError ? 'error' : 'no-error'}
                      type="text"
                      name="firstname"
                      value={firstName}
                      id="firstname"
                      placeholder="First Name"
                    />

                    {firstNameError && (
                      <>
                        <img
                          className="error-icon1"
                          src="/images/icon-error.svg"
                          alt="Error Icon"
                        />
                        <p>
                          <i>First name cannot be empty</i>
                        </p>
                      </>
                    )}
                  </div>
                  <div className="lastname-wrapper">
                    <label className="lastname" htmlFor="lastname">
                      Last Name
                    </label>
                    <input
                      onChange={(e) => toggleLastNameChange(e.target.value)}
                      className={lastNameError ? 'error' : 'no-error'}
                      type="text"
                      name="lastname"
                      value={lastName}
                      id="lastname"
                      placeholder="Last Name"
                    />
                    {lastNameError && (
                      <>
                        <img
                          className="error-icon1"
                          src="/images/icon-error.svg"
                          alt="Error Icon"
                        />
                        <p>
                          <i>Last Name cannot be empty</i>
                        </p>
                      </>
                    )}
                  </div>
                  <div className="email-wrapper">
                    <label className="email" htmlFor="email">
                      Email
                    </label>
                    <input
                      onChange={(e) => toggleEmailChange(e.target.value)}
                      className={emailError ? 'error-email error' : 'no-error'}
                      type="email"
                      name="email"
                      value={email}
                      id="email"
                      placeholder="Email Address"
                    />

                    {emailError && (
                      <>
                        <img
                          className="error-icon3"
                          src="/images/icon-error.svg"
                          alt="Error Icon"
                        />
                        <p>
                          <i>Looks like this is not an email</i>
                        </p>
                      </>
                    )}
                  </div>
                  <div className="password-wrapper">
                    <label className="password" htmlFor="password">
                      Password
                    </label>
                    <input
                      onChange={(e) => togglePasswordChange(e.target.value)}
                      className={passwordError ? 'error' : 'no-error'}
                      type="password"
                      name="password"
                      value={password}
                      id="password"
                      placeholder="Password"
                    />
                    {passwordError && (
                      <>
                        <img
                          className="error-icon4"
                          src="/images/icon-error.svg"
                          alt="Error Icon"
                        />
                        <p>
                          <i>
                            The password must contain a mix of characters,
                            minimum 8 characters.
                          </i>
                        </p>
                      </>
                    )}
                  </div>
                  <button type="submit">Claim your free trail</button>
                  {signUp && (
                    <p className="signup">
                      Congrats, You've claimed free 7 days of coding then
                      $20/mo. thereafter
                    </p>
                  )}
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
