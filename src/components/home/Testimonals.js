import React from "react";

const Testimonals = () => {
  const data = [
    {
      id: "1",
      title: "Devit M. kolin",
      designation: "CEO & Founder",
      comment:
        " Awesome dolor sit amet, consectetur adipisicing elit sed do eusmod tempor incididunt ut labore et dolore magna aliquaenminim veniam quis nostrud dolore magn doloreut labore dolore magn.",
      image: "/assets/images/carousel-1.png",
    },

    {
      id: "2",
      title: "Sienna Miller",
      designation: "CTO",
      comment:
        " Very ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
      image: "/assets/images/carousel-2.png",
    },
  ];

  return (
    <section className="home-client-section pt-100 pb-50">
      <div className="container">
        {/* SECTION TITLE START */}
        <div className="section-title">
          <h2>Clients Feedback</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
          </p>
        </div>
        {/* SECTION TITLE END */}

        <div className="client-carousel-content">
          <div className="client-carousel owl-carousel owl-theme">
            {/* TESTIMONAL START */}

            {data.map((card) => (
              <div className="item" key={card.id}>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-5">
                    <div className="client-carousel-thumb">
                      <div className="client-carousel-icon">
                        <div className="carousel-icon-item">
                          <img src="/assets/images/carousel-sqare.png" alt="icon" />
                        </div>
                        <div className="carousel-icon-item">
                          <img src="/assets/images/carousel-curve.png" alt="icon" />
                        </div>
                        <div className="carousel-icon-item">
                          <img src="/assets/images/carousel-round.png" alt="icon" />
                        </div>
                      </div>
                      <div className="client-carousel-img">
                        <img src={card.image} alt="client" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-7">
                    <div className="client-carousel-caption">
                      <p className="client-caption-para">{card.comment}</p>
                      <h3 className="client-caption-title">{card.title}</h3>
                      <h4 className="client-caption-designation">{card.designation}</h4>
                    </div>
                    <div className="client-carousel-control">
                      <button className="carousel-control-item carousel-control-item-left">
                        <span>
                          <i className="flaticon-right-arrow"></i>
                        </span>
                      </button>
                      <button className="carousel-control-item carousel-control-item-right">
                        <span>
                          <i className="flaticon-left-arrow"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* TESTIMONAL END */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
