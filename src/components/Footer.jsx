import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
      <div className="info">
        <h1>If you have any question, Let us help you!</h1>
        <p>
          If you have any questions or would like to book a tour with us, please
          don't hesitate to contact us.
        </p>
        <p style={{marginTop: "2rem"}}>Phone: +250 788 123 456</p>
        <p style={{textDecoration: "underline"}}>Email: info@rwandatourism.com</p>
        <p>Address: Kigali, Rwanda</p>
        <h3>Subscribe to our newspaper</h3>
        <form>
          <input type="email" placeholder="Input your email here" />
          <button type="submit">
            <SendIcon />
          </button>
        </form>
      </div>
      <div className="navi">
        <div className="top foot">
          <img
            src="https://s3-alpha-sig.figma.com/img/7b44/3779/e00233c67a961c8bfdf2e37a4a1ceb1b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nZvHZDGhrEn8fO~B-UrrPF3rR3YC1LDOl5yjBGHY-XC8dvcr7KvR3g6OFULOUHYwPJxi-oq-YSL3SolVgZV9j0Qbz3EjxhIAhBB~jTbQArb9N9LHpJvSYMbJBDZ3oicFjWf8zdoXD~ZeXTf3yJUhfvyCnpwz~hzrgpCRoMAYQbdrqdB2VNvKh8cJehsN-XBtTslfx7HjhBbkJwll~Js7scLiPzPmN-rp8PqIRB~fjCQL0xgqocI0~LnVpYAwXhLjBUP~ketSartDVM2t4esVa8l8XBPNLkdLheHGb2XbyfxcSY692DHN8C6rVoPi7Ko7Eh3ZggbbU5AwES1n10Z50Q__"
            alt="logo"
          />
          <div className="social-icons">
            <div className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>
        <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <div className="links">
          <div className="column">
            <a href="#">Home</a>
            <a href="#">Testimonials</a>
            <a href="#">Destinations</a>
            <a href="#">Signinn</a>
            
            
          </div>
          <div className="column">
            <a href="#">About Us</a>
            <a href="#">Packages</a>
            <a href="#">Events</a>
            <a href="#">Gallery</a>
            
          </div>
          <div className="column">
            <a href="#">Our Team</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
      </div>
      <div className="copyright">
        <p>Copyright Africa Wizzy Safari 2022</p>
      </div>
    </footer>
  );
}