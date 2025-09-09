import React from 'react'
import "./Landingprojectsection.css"

const Landingprojectsection = (props) => {
  return (
     <div className="header">
      <div className="container2 paddingtop">
        <h1 className="heading-2 header-main-heading">
          {props.heading}
        </h1>
        <p className="body-large header-main-para">
          {props.para}
        </p>
      </div>
    </div>
  )
}

export default Landingprojectsection