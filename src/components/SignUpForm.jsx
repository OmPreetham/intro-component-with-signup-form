const SignUpForm = () => {
  // TODO: Unhide Error Elements and Error Styles
  // TODO: Add Validation functionality with React

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
                  <label className="firstname" htmlFor="firstname">
                    First Name
                  </label>
                  <input
                    className="firstname"
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                  />
                  {/* <img
                    className="error-icon1"
                    src="/images/icon-error.svg"
                    alt="Error Icon"
                  /> */}
                  <label className="lastname" htmlFor="lastname">
                    Last Name
                  </label>
                  <input
                    className="lastname"
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                  />
                  {/* <img
                    className="error-icon2"
                    src="/images/icon-error.svg"
                    alt="Error Icon"
                  /> */}
                  <label className="email" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                  {/* <img
                    className="error-icon3"
                    src="/images/icon-error.svg"
                    alt="Error Icon"
                  /> */}
                  <label className="password" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  {/* <img
                    className="error-icon4"
                    src="/images/icon-error.svg"
                    alt="Error Icon"
                  /> */}
                  <button type="submit">Claim your free trail</button>
                </form>
                <p>
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
