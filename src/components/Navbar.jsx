import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navabar">
      <div className="options">
        <div className="pic">
          <img
            src="https://s3-alpha-sig.figma.com/img/7b44/3779/e00233c67a961c8bfdf2e37a4a1ceb1b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nZvHZDGhrEn8fO~B-UrrPF3rR3YC1LDOl5yjBGHY-XC8dvcr7KvR3g6OFULOUHYwPJxi-oq-YSL3SolVgZV9j0Qbz3EjxhIAhBB~jTbQArb9N9LHpJvSYMbJBDZ3oicFjWf8zdoXD~ZeXTf3yJUhfvyCnpwz~hzrgpCRoMAYQbdrqdB2VNvKh8cJehsN-XBtTslfx7HjhBbkJwll~Js7scLiPzPmN-rp8PqIRB~fjCQL0xgqocI0~LnVpYAwXhLjBUP~ketSartDVM2t4esVa8l8XBPNLkdLheHGb2XbyfxcSY692DHN8C6rVoPi7Ko7Eh3ZggbbU5AwES1n10Z50Q__"
            alt="logo"
          />
        </div>
        <div className="nav">
          <nav>
            <a onClick={() => navigate('/')}>Home</a>
            <a onClick={() => navigate('/about_us')}>About</a>
            <a onClick={() => navigate('/package')}>Tour package</a>
            <a onClick={() => navigate('/gallery')}>Gallery</a>
            <a href='#'>Blog</a>
            <a onClick={() => navigate('/contact_us')}>Contact Us</a>
          </nav>
        </div>
      </div>
      <div className="sign">
        <button className="sign-in">Sign In</button>
      </div>
    </div>
  );
}
