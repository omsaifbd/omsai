import React from "react";
import Marquee from "react-fast-marquee"

export default function Home() {
  return (
    <div className="home commonbg">
      <Marquee pauseOnHover speed="100">
        <h3 style={{ color: "#92e3a9" }}>ADMISSION OPEN, ENROLLED NOW</h3>
      </Marquee>
    </div>
  );
}
