import { useRef } from "react";

const PlaceOrder = () => {


  const UserMail = useRef();
  const UserName = useRef();


  const handleBuyButton = (event) => {
    event.preventDefault();
    const mail = UserMail.current.value;
    const name = UserName.current.value;
    UserMail.current.value = "";
    UserName.current.value = "";
    console.log(name);
    console.log(mail);
    handleMailButton(name,mail);
  }

  const handleMailButton = (name,mail) => {


    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'jonathan87@ethereal.email',
        pass: 'zkMPzh8WtqdURFb2vc'
      }
    });

    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: {mail}, // list of receivers
        subject: ("Hello ✔",{name}), // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }

    main().catch(console.error);
  }


  return (
    <>
      <div className="my-form" onSubmit={handleBuyButton}>
        <form>
          <div className="mb-3">
            <div>Enter Your name</div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">@</span>
              <input type="text" ref={UserName} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" ref={UserMail} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            <button type="submit" className="btn btn-success btn-place-order my-buy-button" >Buy Now</button>

          </div>
        </form>
      </div>
    </>
  )
}
export default PlaceOrder;