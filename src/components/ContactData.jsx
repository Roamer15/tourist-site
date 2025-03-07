export default function ContactData() {
  return (
    <>
      <div className="text-contact">
        <h1>Get in Touch</h1>
        <p>
          We would love to hear from you! If you have any comments or
          suggestions about our website or our tours, please don t hesitate to
          get in touch. We are always looking for ways to improve and make your
          travel experience even better.
        </p>
      </div>

      <div className="form-container">
        <div className="row text">
          <h4>Contct us</h4>
        </div>
        <form>
          <div className="row">
            <div className="mb-4 col">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                First Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Input your First Name in Here"
              />
            </div>
            <div className="mb-4 col">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Last Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Input your Last Name in Here"
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-4">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-group flex-nowrap mb-4 ">
              <span className="input-group-text" id="addon-wrapping">
                +237
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
          </div>
          <div className="mb-4 row">
            <button
              type="submit"
              className="btn submit"
              style={{
                display: "flex",
                width: "124px",
                height: "56px",
                borderRadius: "8px",
                padding: "18px 24px",
                background: "#C7923E",
                color: "#fff",
                alignItems: "center",
                fontSize: "16px",
                fontFamily: "Mulish, sans-serif",
                letterSpacing: "0.5%",
                justifyContent: " center",
              }}
            >
              submit
            </button>
          </div>
        </form>
      </div>
      <div className="contact-info">
        <div className="box-info">
          <h3>Social media</h3>
          <div className="contact-icons">
            <div>
              <i className="fa-brands fa-facebook-f" />
            </div>
            <div>
              <i className="fa-brands fa-twitter" />
            </div>
            <div>
              <i className="fa-brands fa-instagram" />
            </div>
            <div>
              <i className="fa-brands fa-linkedin-in" />
            </div>
          </div>
        </div>
        <div className="box-info">
          <h3>Email & phone</h3>
          <div className="d-flex align-items-center justify-content-start icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0677 3.16019L16.4828 0.57767C16.3004 0.394523 16.0837 0.249209 15.845 0.150074C15.6063 0.0509392 15.3504 -6.19408e-05 15.092 5.64551e-08C14.5653 5.64551e-08 14.0702 0.206311 13.6988 0.57767L10.9173 3.35922C10.7342 3.54157 10.5889 3.7583 10.4897 3.99698C10.3906 4.23565 10.3396 4.49156 10.3397 4.75C10.3397 5.2767 10.546 5.77184 10.9173 6.1432L12.9513 8.17718C12.4752 9.2266 11.8132 10.1813 10.9974 10.9951C10.1836 11.813 9.22906 12.4773 8.17949 12.9563L6.14554 10.9223C5.9632 10.7392 5.74647 10.5939 5.5078 10.4947C5.26913 10.3956 5.01322 10.3446 4.75478 10.3447C4.22809 10.3447 3.73295 10.551 3.3616 10.9223L0.577663 13.7015C0.394294 13.8841 0.248856 14.1013 0.149719 14.3404C0.0505807 14.5795 -0.00030077 14.8358 1.33745e-06 15.0947C1.33745e-06 15.6214 0.206309 16.1165 0.577663 16.4879L3.15772 19.068C3.74995 19.6626 4.56789 20 5.40769 20C5.58487 20 5.75477 19.9854 5.92224 19.9563C9.19404 19.4175 12.4391 17.6772 15.058 15.0607C17.6745 12.4466 19.4123 9.20388 19.9584 5.92233C20.1235 4.9199 19.791 3.88835 19.0677 3.16019Z"
                fill="#304F47"
              />
            </svg>

            <span>+237 651831211</span>
          </div>
          <div className="d-flex icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2857 0H0.714286C0.319196 0 0 0.40625 0 0.909091V19.0909C0 19.5938 0.319196 20 0.714286 20H19.2857C19.6808 20 20 19.5938 20 19.0909V0.909091C20 0.40625 19.6808 0 19.2857 0ZM17.4821 3.09375L10.4397 10.0682C10.2656 10.2415 10.0223 10.2415 9.84822 10.0682L2.80357 3.09375C2.77702 3.06767 2.75754 3.03166 2.74787 2.99078C2.7382 2.9499 2.73882 2.90619 2.74965 2.86579C2.76048 2.82538 2.78097 2.7903 2.80825 2.76546C2.83554 2.74062 2.86824 2.72727 2.90179 2.72727H17.3839C17.4175 2.72727 17.4502 2.74062 17.4775 2.76546C17.5047 2.7903 17.5252 2.82538 17.5361 2.86579C17.5469 2.90619 17.5475 2.9499 17.5378 2.99078C17.5282 3.03166 17.5087 3.06767 17.4821 3.09375Z"
                fill="#304F47"
              />
            </svg>
            <span>bbonteemma@gmail.com</span>
          </div>
        </div>
        <div className="box-info icon">
          <h3>Address</h3>
          <p>
            kk 600 st <br />
            Kigali, Rwanda
          </p>
        </div>
      </div>
    </>
  );
}
