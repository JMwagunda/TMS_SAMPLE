import { useRouteError } from "react-router-dom";
import "./error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  // Check if error object is null or undefined before accessing its properties
  if (!error || !error.status) {
    return (
      <div>
        <main className="main_container">
          <div style={{ textAlign: "center" }}>
            <div>
              <h1 className="error-heading">Oops! Something went wrong</h1>
              <p className="error-text">An unexpected error occurred.</p>
              <div className="link-container">
                <Link to={"/"} className="link">
                  Go back home
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <main className="main_container">
        <div style={{ textAlign: "center" }}>
          <div>
            <p className="error-status">{error.status}</p>
            <h1 className="error-heading">Oops! {error.statusText}</h1>
            <p className="error-text">{error.data}</p>
            <div className="link-container">
              <Link to={"/"} className="link">
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Error;