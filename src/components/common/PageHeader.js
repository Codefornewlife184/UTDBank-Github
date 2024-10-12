import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, image }) => {
  const bgimage = { backgroundImage: `url(/assets/images/${image})` };
  return (
    <div>
      <header className="page-title page-bg" style={bgimage}>
        <div className="container">
          <div className="page-title-inner">
            <div className="section-title">
              <h1>{title}</h1>
              <ul className="page-breadcrumbs">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default PageHeader;
