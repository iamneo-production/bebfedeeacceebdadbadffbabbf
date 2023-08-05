import React, { useState, useRef } from 'react';
import './App.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const millis = milliseconds % 1000;

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${millis.toString().padStart(3, '0')}`;
    return formattedTime;
  };

  const handleStart = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10); // Increment by 10 milliseconds
    }, 10);
  };


  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='stopwatch'>
          <h1>Stopwatch</h1>
          <div>{formatTime(time)}</div>
          <div>
            {!isRunning ? (
              <button onClick={handleStart}>Start</button>
            ) : (
              <>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleReset}>Reset</button>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Stopwatch;