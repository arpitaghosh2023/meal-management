import React from 'react';


const Registration = () => (
//   <section className="vh-100 bg-image"
//     style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
    <section className="mask d-flex align-items-center h-100 gradient-custom-3"
      style={{
        background: 'linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))'
      }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: '15px' }}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                <form>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                    <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                   
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                 
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="userType">User Type</label>
                    <select className="form-control form-control-lg" id="userType">
                    <option >select user type</option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                    </select>
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                    
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                    <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                   
                  </div>

                  {/* <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                    <label className="form-check-label" htmlFor="form2Example3g">
                      I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                    </label>
                  </div> */}

                  <div className="d-flex justify-content-center">
                    <button type="button"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                  </div>

                  <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                    className="fw-bold text-body"><u>Login here</u></a></p>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
//   </section>
);

export default Registration;
