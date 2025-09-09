import React from 'react'
import "./Landingprojectsection.css"

const RolesAndTitles = ({ role, year, platforms, industry, tools }) => {
  return (
    <div className="rolesandtitles reveal from-bottom">
      <div className="container2">
        <div className="allcontentwarp">

          <div className="content-role">
            <h1 className="content-title">{role.title}</h1>
            <p className="heading-6">{role.value}</p>
          </div>

          <div className="content-role">
            <h1 className="content-title">{year.title}</h1>
            <p className="heading-6">{year.value}</p>
          </div>

          <div className="content-role">
            <h1 className="content-title">{platforms.title}</h1>
            <p className="heading-6">{platforms.value}</p>
          </div>

          <div className="content-role">
            <h1 className="content-title">{industry.title}</h1>
            <p className="heading-6">{industry.value}</p>
          </div>

          <div className="content-role">
            <h1 className="content-title">{tools.title}</h1>
            <p className="heading-6">{tools.value}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RolesAndTitles;