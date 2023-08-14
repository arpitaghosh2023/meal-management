import React from 'react';


const Login = () => (
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
                <h2 className="text-uppercase text-center mb-5">Login your account</h2>

                <form>

                  

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                 
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                    
                  </div>

                  
                  <div className="d-flex justify-content-center">
                    <button type="button"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                  </div>

                  <p className="text-center text-muted mt-5 mb-0">you don't have an account? <a href="/signin"
                    className="fw-bold text-body"><u>Register here</u></a></p>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
//   </section>
);

export default Login;
