import { useRef } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {

  const UserMail = useRef();

  const handleSigninSubmitButton = (event) => {
    event.preventDefault();
    const SignInMail = UserMail.current.value;
    UserMail.current.value = "";
    console.log(SignInMail);


  }
  return (
    <>
    <div style={{height: "800px"}}>

    
      <div  onSubmit={handleSigninSubmitButton} className="container" style={{ width: "40%" }}>
        <h3 className="my-login">Enter Your Login Details:</h3>

        <div className="mb-3">
          <h4 htmlFor="exampleFormControlInput1" className="form-label">Email address</h4>

          <input ref={UserMail} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{ width: "700px" }} />

        </div>
        <div className="mb-3">
          <h4 htmlFor="inputPassword5" className="form-label">Password</h4>

          <input type="password" id="inputPassword5" placeholder="Enter your password" className="form-control" aria-describedby="passwordHelpBlock" style={{ width: "700px" }} />

          <Link style={{float:"right"}}>Forgot Password</Link>
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and numbers.
          </div>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            I am agree with the term's and condition of the platform
          </label>
        </div>
        <button type="submit" style={{marginTop: "10px"}} className="btn btn-success my-submit-btn">Submit</button>
        <h6 style={{margin: "10px 0px",fontSize: "20px",fontWeight: "Bold"}}>For signup <Link to="/signUp">click here</Link></h6>
        </div>
      </div>
    </>
  )
}
export default SignIn;