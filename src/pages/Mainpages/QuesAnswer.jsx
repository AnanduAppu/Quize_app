import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Clintcontex from "../../../Clentcontex/Clientcontex";

function QuesAnswer() {
  const navigate = useNavigate()
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const {
    setIsRunning,
    setWidth,
    initialWidth,
    quizData,
    setHidePogress,
    setStreak1,
    setStreak2,
    setStreak3,
    setStreak4,
    setStreakCount,
    questionNumber,
    setQuestionNumber,
   setMedalScore,
   setCoinScore
  } = useContext(Clintcontex);

  const [shuffledQuizData,setshuffledQuizData]=useState(quizData)
  const [QuestionCount, setQuestionCount] = useState(1);
  const [Question, setQuestion] = useState(quizData[0]);
  const [correctAnswer, setCorrectAnswer] = useState(null);// state which take correct answer
  const [isClicked, setIsClicked] = useState(false);
  const [correctBlock, setCorrectBlock] = useState(false);
  const [incorrect,setincorrect]=useState(true)
  const [wrongAnswer,setWrongAnswer]=useState(Number)//which take wrong answer
  const extractedData = quizData.map(item => ({
    answer: item.answer,
    id: item.id,
    colour:item.colour
}));
  useEffect(()=>{
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    const shuffledQuizData = shuffleArray(extractedData);
    setshuffledQuizData(shuffledQuizData)
  },[ QuestionCount])



 
  const handleAnswer = (e, quizid) => {
    setIsClicked(true);

    e.preventDefault();

    if (Question.id === quizid) {
      setCorrectAnswer(quizid);

      if (QuestionCount == 1) {
        setStreak1(true);
        setMedalScore(10)
        setCoinScore(100)
        setStreakCount(1);
      }

      if (QuestionCount == 2) {
        setStreak2(true);
        setMedalScore(5)
        setCoinScore(200)
        setStreakCount(2);
      }

      if (QuestionCount == 3) {
        setStreak3(true);
        setMedalScore(3)
        setCoinScore(300)
        setStreakCount(3);
      }
      if (QuestionCount == 4) {
     
       
        setStreak4(true);
        setMedalScore(1)
        setCoinScore(400)
        setStreakCount(4);
       
        
      }

      setHidePogress(true);
      setTimeout(() => {
        if(QuestionCount == 4){
          navigate('/endpage')
        }
        setQuestionNumber(questionNumber + 1);
        setIsClicked(false);
        setCorrectAnswer(null);
      
        setHidePogress(false);
        setWidth(initialWidth);
        setQuestion(quizData[QuestionCount]);
        setQuestionCount(QuestionCount + 1);
        setIsRunning(true);
        setCorrectBlock(false);
      }, 3000);

      setCorrectBlock(true);
      setIsRunning(false);
    } else {
      setWrongAnswer(quizid)
      setCorrectBlock(true);
      setIsRunning(false);
      setincorrect(false)
      setTimeout(() => {
        navigate('/endpage')
      }, 3000);
     
    }
  };

 
 
  return (
    <>
      <div className="flex justify-center items-center h-[28vh]">
        <h1 className="text-3xl font-bold text-white ">{Question.question || 'the end'}</h1>
      </div>
      <div className="flex justify-center items-end h-[55vh]">
        {shuffledQuizData.map((item, ind) => (
          <div
            style={{
              visibility : isClicked ? (correctAnswer === item.id ? 'visible' :wrongAnswer=== item.id ? 'visible' : Question.id===item.id?'visible':'hidden') :'visible' ,
              backgroundColor :  isClicked ? (correctAnswer === item.id ? 'green' : wrongAnswer=== item.id ? 'red' : Question.id===item.id?'green':'') :item.colour,
              border:  isClicked ? (correctAnswer === item.id ? '3px solid white': wrongAnswer=== item.id ? '3px solid white' : Question.id===item.id?'3px solid white':'') :``
            }}
            key={item.id}
            className={`w-96  p-4 rounded-lg shadow-lg h-96cursor-pointer ms-1`}
            onMouseEnter={() => setHoveredCard(ind + 1)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={(e) => handleAnswer(e, item.id)}
          >
            <h2 className="text-white font-bold text-end">
              <span
                className={`px-1 shadow-md ${
                  hoveredCard === ind + 1 ? "invisible" : ""
                }`}
              >
                {ind + 1}
              </span>
            </h2>
            <p className="text-white text-center py-36 text-2xl font-semibold">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      {correctBlock &&<div >{incorrect? (
        <div className="w-[100%] bg-green-500 rounded-sm duration-700">
          <h1 className="text-white text-center text-2xl py-4 font-bold  duration-700">
            CORRECT
          </h1>
        </div>
      ) : (
        <div className="w-[100%] bg-red-500 rounded-sm duration-700">
          <h1 className="text-white text-center text-2xl py-4 font-bold duration-700">
            INCORRECT
          </h1>
        </div>
      )}</div>}
    </>
  );
}

export default QuesAnswer;
