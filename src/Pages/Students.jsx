import React from 'react'
import {useState, useEffect } from 'react';
import StudentCards from '../Component/StudentCards';

export default function Students() {

  const [student, setStudent] = useState([]);

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
      "https://script.google.com/macros/s/AKfycbwpdH7RBHBcBos7bZ5EiQywfKbn0N3dOo8AHfg2Ts5fdZXpeyQBrjbBlAtLHOcQV08o/exec",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setStudent(result))
      .catch((error) => console.log("error", error));
      
  }

  useEffect(() => {
   showData();   
    
    
  }, [student])
  

  return (
    <div className="students commonbg">
      
      {student.map((el) => <StudentCards key={el.StudentId} avatar={el.image} studentId={el.StudentId} name={el.Name} qualification={el.Qualification} course={el.Course} />)}
      
    </div>
  );
}
