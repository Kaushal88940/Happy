import { useRef } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const name1 = useRef();
  const name2 = useRef();
  const Gender = useRef();
  const mail = useRef();
  const pass = useRef();

  const handleUserDetails = (event) => {
    event.preventDefault();

    const FirstName = name1.current.value;
    const LastName = name2.current.value;
    const UserGender = Gender.current.value;
    const UserMail = mail.current. value;
    const UserPass = pass.current.value;

    name1.current.value = "";
    name2.current.value = "";
    Gender.current.value = "";
    mail.current.value = "";
    pass.current.value = "";


    console.log(FirstName);
    console.log(LastName);
    console.log(UserGender);
    console.log(UserMail);
    console.log(UserPass);
  }
  return (
    <>
      <div style= {{ height: "800px" }}>
        <div className="container" style={{ width: "40%" }}>
          <h3 className="my-login">Enter Your Details Here:</h3>


          <div>Enter Your Name</div>
          <div className="input-group mb-3 UserName">
            <input ref={name1} type="text" className="form-control my-user-name" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" />
            <input ref={name2} type="text" className="form-control my-user-name" placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div>Gender</div>
          <select ref={Gender} style={{ marginTop: "7px", fontSize: "17px" }} className="form-select form-select-lg mb-3" aria-label="Large select example">
            <option value>Select Your Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Others</option>
          </select>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input ref={mail} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <label htmlFor="inputPassword5" className="form-label">Password</label>
          <input ref={pass} type="password" id="inputPassword5" placeholder="Enter your password" className="form-control" aria-describedby="passwordHelpBlock" />
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and numbers.
          </div>

          <button type="submit" className="btn btn-success" style={{marginTop: "10px"}}  onClick={handleUserDetails}>Submit</button>
          <h6 style={{ margin: "10px 0px", fontSize: "20px", fontWeight: "Bold" }}>For signin <Link to="/signin">click here</Link></h6>

        </div>
      </div>
    </>
  )
}

export default SignUp;