import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export default function Quiz() {
  const [quizData, setQuizData] = useState([])
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
      "https://script.google.com/macros/s/AKfycbyGTNWGC8Q3dOLeniAwhFkkCnSQ0lyrNsmwP4VIaa2ToshjYPYlbrAQVWEdP-SAUM5b/exec?action=getQuiz",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setQuizData(result);
        setLoading(false)
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    showData();
  },[quizData])

  return (
    <div className="quiz commonbg">
      <div className="loader" style={{ display: loading ? "block" : "none" }}>
        <img src={require("../images/loader.gif")} alt="loader" />
      </div>
      <div className="quizouter fixbg">
        {quizData.map((el) => (
          <div className="quizcard">
            <a href={el.Link} target="blank">
              <h1>{el.Name}</h1>
              Start Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
