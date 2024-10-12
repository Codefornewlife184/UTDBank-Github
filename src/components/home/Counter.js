import React from "react";

const Counter = () => {
  return (
    <div>
      <section className="counter-section pt-100 pb-70">
        <div className="container">
          {/* <!-- SECTION TITLE START --> */}
          <div className="section-title">
            <h2>We always try to evaluate customers Values</h2>
          </div>
          {/* <!-- SECTION TITLE END --> */}

          <div className="counter-content">
            {/* <!-- COUNTER ITEM START --> */}
            <div className="counter-item">
              <h3>
                <span className="counter">70</span>
                <span className="counter-text-lg">+</span>
              </h3>
              <p>Contributors</p>
            </div>
            {/* <!-- COUNTER ITEM END --> */}

            {/* <!-- COUNTER ITEM START --> */}
            <div className="counter-item">
              <h3>
                <span className="counter">40</span>
                <span className="counter-text-sm">K</span>
              </h3>
              <p>Feedback</p>
              <div className="counter-loader">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            {/* <!-- COUNTER ITEM END --> */}

            {/* <!-- COUNTER ITEM START --> */}
            <div className="counter-item">
              <h3>
                <span className="counter">1000</span>
                <span className="counter-text-sm">k</span>
              </h3>
              <p>Downloaded</p>
              <div className="counter-loader">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            {/* <!-- COUNTER ITEM END --> */}

            {/* <!-- COUNTER ITEM START --> */}
            <div className="counter-item">
              <h3>
                <span className="counter">590</span>
                <span className="counter-text-lg">+</span>
              </h3>
              <p>Workers</p>
              <div className="counter-loader">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            {/* <!-- COUNTER ITEM END --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
