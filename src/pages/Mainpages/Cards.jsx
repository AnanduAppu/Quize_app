import React, { useContext, useState, useEffect } from "react";
import Clintcontex from "../../../Clentcontex/Clientcontex";

function Cards() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { setIsRunning, setWidth, initialWidth, quizData} = useContext(Clintcontex);
  const [QuestionCount,setQuestionCount]=useState(1)
  const [Question, setQuestion] = useState(quizData[0]);
  const [correctAnswerSelected, setCorrectAnswerSelected] = useState('');
  const [hidden,setHidden]=useState('')
  const [answer,setAnswer]=useState([])
  useEffect(() => {
    const result = quizData.map((ele) => ele.answer);
  
    result.sort(() => Math.random() - 0.5);
    setAnswer(result);
  
  }, [QuestionCount]);

  const handleAnswer = (e, answer) => {
    e.preventDefault();

    if (Question.answer === answer) {
      console.log(QuestionCount);
      if (QuestionCount === 4) {
        return alert("You won the quiz");
      }
      setQuestion(quizData[QuestionCount]);
      setQuestionCount(QuestionCount + 1);
      setCorrectAnswerSelected(answer)
    
      setIsRunning(true);
      setWidth(initialWidth);
    } else {
      setIsRunning(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-[28vh]">
        <h1 className="text-3xl font-bold text-white ">{Question.question}</h1>
      </div>

      <div className="flex justify-center items-end h-[60vh]">
      <div
  className={`w-96 ms-1 p-4 rounded-lg shadow-lg h-96 cursor-pointer ${
    correctAnswerSelected ===answer[0]?  "bg-green-500" : "bg-rose-500"
  }`}
  onMouseEnter={() => setHoveredCard(1)}
  onMouseLeave={() => setHoveredCard(null)}
  onClick={(e) => handleAnswer(e, answer[0])}
>
          <h2 className="text-white font-bold text-end">
            <span
              className={`px-1 shadow-md shadow-rose-700 ${
                hoveredCard === 1 ? "invisible" : ""
              }`}
            >
              1
            </span>
          </h2>
          <p className="text-white text-center py-36 text-2xl font-semibold">
          {answer[0]}
          </p>
        </div>

        <div
           className={`w-96 ms-1 p-4 bg-red-500 rounded-lg shadow-lg h-96 cursor-pointer ${
            correctAnswerSelected ===answer[0]?  "bg-green-500" : " "
          }`}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={(e) => handleAnswer(e, answer[1])}
        >
          <h2 className="text-white font-bold text-end">
            <span
              className={`px-1 shadow-md shadow-red-700 ${
                hoveredCard === 2 ? "invisible" : ""
              }`}
            >
              2
            </span>
          </h2>
          <p className="text-white text-center py-36 text-2xl font-semibold">
          {answer[1]}
          </p>
        </div>
        <div
           className={`w-96 p-4 mx-1 bg-yellow-500 rounded-lg shadow-lg h-96 cursor-pointer ${
            correctAnswerSelected ===answer[0]?  "bg-green-500" : " "
          }`}
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={(e) => handleAnswer(e, answer[2])}
        >
          <h2 className="text-white font-bold text-end">
            <span
              className={`px-1 shadow-md shadow-yellow-700 ${
                hoveredCard === 3 ? "invisible" : ""
              }`}
            >
              3
            </span>
          </h2>
          <p className="text-white text-center py-36 text-2xl font-semibold">
          {answer[2]}
          </p>
        </div>
        <div
           className={`w-96 p-4 bg-blue-500 rounded-lg shadow-lg h-96 cursor-pointer me-1 ${
            correctAnswerSelected ===answer[0]?  "bg-green-500" : " "
          }`}
          onMouseEnter={() => setHoveredCard(4)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={(e) => handleAnswer(e, answer[3])}
        >
          <h2 className="text-white font-bold text-end">
            <span
              className={`px-1 shadow-md shadow-blue-700 ${
                hoveredCard === 4 ? "invisible" : ""
              }`}
            >
              4
            </span>
          </h2>
          <p className="text-white text-center py-36 text-2xl font-semibold">
          {answer[3]}
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
