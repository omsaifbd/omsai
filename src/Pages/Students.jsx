import React from "react";
import { useState, useEffect } from "react";
import StudentCards from "../Component/StudentCards";

export default function Students() {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);

  const showData = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "NID=511=BQyrJhJkek4ZEuB4vJJh77CHNtPYT9DktZX-GeOeu_YCbxzsYPFoz5RmVOruBBfv8T5uZTGomjThibdjZ9ESFrbmml6qkrh5N7XTMzc8lFZAVs4tSbtxIdCRo6b5kowsx3E_qcDC9n1emzVI9pMLHuP5USiSfjPbiDFzODo4B1s"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=435xJapOz1r3qsUV_QK5TmF-cxuES2zEhBBj8tNPxI_SqQRiH0LVOQ5gdvIdpAFX3GF9z_nizXse3A9QfNG2wydN7M8PKyjxOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa3uUV6MeYkWf3JOUHmDUAbs5dDbbJ6-ZVba98l6dc5zV2-yCho0d-qX5qbwLw1lU1PQgHkpj8RZMXoPzKdiaYc9yf4UlQ0-NxgXIuFltvcj9bVKn3MpuO19m_4qgmdpvDQ&lib=MeI_Y-QLU5awayTlPJMWedwr9zL5fpIxD",
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        setStudent(result);
        setLoading(false)
      })
      .catch((error) => console.log("error", error));
    
  };

  useEffect(() => {
    showData();
   
  }, [student]);
 
  
  return (
    <div  className="students commonbg" >
      <div className="loader" style={{ display: loading ? "block" : "none" }}>
        <img
          src={require("../images/loader.gif")}
          alt="loader"
        />
      </div>
      <div className="studentdata fixbg ">
        {student.map((el) => (
          <StudentCards
            key={el.StudentId}
            avatar={el.image.slice(33, el.image.length)}
            studentId={el.StudentId}
            name={el.Name}
            qualification={el.Qualification}
            course={el.Course}
          />
        ))}
      </div>
    </div>
  );
}
