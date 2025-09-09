import React from "react";
import "./Aboutpage.css"; // your styles

const EnjoySection = () => {
  return (
    <div className="combine-boths-section">
      {/* Left: What I Enjoy Creating */}
      <section className="WhatIEnjoyCreating">
          <div className="content-whatIEnjoy">
            <h1 className="heading-3 WhatIEnjoyCreating-h">
              What I Enjoy Creating
            </h1>
            <p className="body-large WhatIEnjoyCreating-p">UI/UX for Web & Mobile</p>
            <p className="body-large WhatIEnjoyCreating-p">Design Systems</p>
            <p className="body-large WhatIEnjoyCreating-p">
              Accessibility-First Experiences
            </p>
            <p className="body-large WhatIEnjoyCreating-p">
              Motion & Microinteractions
            </p>
            <p className="body-large WhatIEnjoyCreating-p">
              3D & Shader Experiments
            </p>
          </div>

      </section>

      {/* Right: A Few Personal Things I Enjoy */}
      <section className="fewthings">
          <div className="fewthingsheading">
            <h1 className="heading-3 WhatIEnjoyCreating-h">
              A Few Personal Things I Enjoy
            </h1>
          </div>

          <div className="icon-content-fewthings">
            <div className="icon-text">
              <img
                src="/icons/cartoon 1 (traced).svg"
                alt="Anime"
                width="77"
                height="77"
              />
              <p className="body-large icon-p">Anime</p>
            </div>

            <div className="icon-text">
              <img
                src="/icons/cricket 1 (traced).svg"
                alt="Cricket"
                width="77"
                height="77"
              />
              <p className="body-large icon-p">Cricket</p>
            </div>

            <div className="icon-text">
              <img src="/icons/movie.svg" alt="Movie" width="77" height="77" />
              <p className="body-large icon-p">Movie</p>
            </div>

            <div className="icon-text">
              <img
                src="/icons/distance 1 (traced).svg"
                alt="Travel"
                width="77"
                height="77"
              />
              <p className="body-large icon-p">Travel</p>
            </div>

            <div className="icon-text">
              <img
                src="/icons/dimensions 1 (traced).svg"
                alt="Three JS"
                width="77"
                height="77"
              />
              <p className="body-large icon-p">Three JS</p>
            </div>
          </div>
      </section>
    </div>
  );
};

export default EnjoySection;
