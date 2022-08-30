import React, { useEffect, useState } from "react";
import {
  Container,
  Text,
  Timer,
  Countdown,
  Buttons,
  Tags
} from "./styles";

const Home = () => {

  const [time,setTime] = useState(25*60); // time in seconds 
  const [isActive,setIsActive] = useState(false);
  const [workTime,setWorkTime] = useState(25*60);
  const [shortBreakTime,setShortBreakTime] = useState(5*60);
  const [longBreakTime,setLongBreakTime] = useState(15*60);
  const [initialTime,setInitialTime] = useState(time);

  const workTimeToggle = () => {
    setTime(workTime);
    setIsActive(false)
    setInitialTime(workTime);
  }

  const shortBreakTimeToggle = () => {
    setTime(shortBreakTime);
    setIsActive(false)
    setInitialTime(shortBreakTime);
  }

  const longBreakTimeToggle = () => {
    setTime(longBreakTime);
    setIsActive(false)
    setInitialTime(longBreakTime);
  }


  const getTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  const toggleTimer = () => {
    setIsActive(!isActive);
  }

  const resetTimer = () => {
    setTime(initialTime);
    setIsActive(false);
  }

  useEffect(() => {
    if(time > 0 && isActive){
    const interval = setInterval(() => {
      setTime(time - 1);
    } , 1000);
    return () => clearInterval(interval);
  }

  },[time,isActive]);

  


  return (
    <Container>
      <Text>
        <h1>Focus Timer</h1>
        <p>Focus on what matters most, do more in less time.</p>
      </Text>
      <Timer initialTime = {initialTime}>
        <Tags initialTime={initialTime}>
          <button className="work" onClick={workTimeToggle}>
            Work
          </button>
          <button className="shortBreak" onClick={shortBreakTimeToggle}>
            short Break
          </button>
          <button className="longBreak" onClick={longBreakTimeToggle}>
            long Break
          </button>


        </Tags>
        <Countdown>
          <h1>
            {getTime()}
          </h1>
        </Countdown>
        <Buttons>
          <button onClick={toggleTimer} >{isActive ? 'stop':'start'}</button>
          <button onClick={resetTimer}>reset</button>
        </Buttons>
      </Timer>
    </Container>
  );
};

export default Home;

