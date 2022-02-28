import React, { useState } from "react";
import './Eightball.css';

const Eightball = ({ answers }) => {
    const [answer, setAnswer] = useState({
        msg: 'Think of a Question',
        color: 'black',
      });
    const getRandomAnswer = () => {
        const idx = Math.floor(Math.random() * answers.length);
        setAnswer(answers[idx]);
      };
      return (
        <div className="EightBall">
          <div className="EightBall-Circle"
            style={{ backgroundColor: answer.color }} 
            onClick={getRandomAnswer}
          >
            <div className="EightBall-TextArea">
              <h1 className="EightBall-Text">{answer.msg}</h1>
            </div>
          </div>
          <button className="Eightball-Reset" 
          onClick={()=> setAnswer({msg:"Think of a Question",color:"black"})}>
              Reset
          </button>
        </div>
      );

    
}



export default Eightball;