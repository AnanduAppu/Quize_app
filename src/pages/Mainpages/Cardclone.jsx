import React, { useContext, useState } from "react";
import Clintcontex from "../../../Clentcontex/Clientcontex";

function CardsClone() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { setIsRunning, setWidth, initialWidth, quizData,hidePogress, setHidePogress  } = useContext(Clintcontex);
  const [QuestionCount,setQuestionCount]=useState(1)
  const [Question, setQuestion] = useState(quizData[0]);
  const [correctAnswer,setCorrectAnswer]=useState(null)
  const [isClicked,setIsClicked] = useState(false)



  const handleAnswer = (e,quizid) => {
    setIsClicked(true)

    e.preventDefault()

    if(Question.id===quizid){
      setCorrectAnswer(quizid)
      console.log(QuestionCount)
      if(QuestionCount==4){
       return alert ("you won the quiz")   
      }
      
      setHidePogress(true)
      setTimeout(()=>{setIsClicked(false);setCorrectAnswer(null); 
        setHidePogress(false)
        setWidth(initialWidth); setQuestion(quizData[QuestionCount])
        setQuestionCount(QuestionCount+1)
        setIsRunning(true);
      },3000 )

      //setIsRunning(true);
      setIsRunning(false);
     
    }
    else{
      setIsRunning(false);
    }
    
    
  };

  return (
    <>
      <div className="flex justify-center items-center h-[28vh]">

        <h1 className="text-3xl font-bold text-white ">{Question.question}</h1>
      </div>
      <div className="flex justify-center items-end h-[58vh]">
      {quizData.map((item,ind) => (
        <div
        style={{
          visibility : isClicked ? (correctAnswer === item.id ? 'visible' : 'hidden') :'visible' ,
          backgroundColor :  isClicked ? (correctAnswer === item.id ? 'green' : `${item.colour}`) :item.colour,
          border:  isClicked ? (correctAnswer === item.id ? '3px solid white': ``) :``
          
          
        }}
          key={item.ind}
          className={`w-96  p-4 rounded-lg shadow-lg h-96cursor-pointer ms-1`}
          onMouseEnter={() => setHoveredCard(ind+1)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={(e)=>handleAnswer(e,item.id)}
        >
          <h2 className="text-white font-bold text-end">
            <span className={`px-1 shadow-md ${hoveredCard ===ind+1  ? "invisible" : ""}`}>
              {ind+1}
            </span>
          </h2>
          <p className="text-white text-center py-36 text-2xl font-semibold">
            {item.answer}
          </p>
        </div>
      ))}
      <div className="flex justify-center items-end h-[60vh]">
        
      </div>
      </div>
    </>
  );
}

export default CardsClone;
