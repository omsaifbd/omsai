import React from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="home commonbg">
      <Marquee pauseOnHover speed="100">
        <h2 style={{ color: "#92e3a9" }}>ADMISSION OPEN, ENROLLED NOW</h2>
      </Marquee>

      <div className="coursecard">
        <img
          src={require("../Institutecourses/Basic/Basic.png")}
          alt="courses"
        />
        <img
          src={require("../Institutecourses/Basic/Excel.png")}
          alt="courses"
        />
        <img
          src={require("../Institutecourses/Basic/Tally.png")}
          alt="courses"
        />
        <img
          src={require("../Institutecourses/Basic/Master Tally.png")}
          alt="courses"
        />
        <img
          src={require("../Institutecourses/Basic/Web Designing.png")}
          alt="courses"
        />
        <img
          src={require("../Institutecourses/Basic/Graphic.png")}
          alt="courses"
        />
      </div>
    </div>
  );
}
