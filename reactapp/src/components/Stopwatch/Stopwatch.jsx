import React from 'react';

class Stopwatch extends React.Component{
    constructor() {

        super();
    
        this.state = {
          miliSec: 0,
          Sec: 0,
          min: 0,
          start: true,
          pause: false,
          resume: false,
          reset: false,
    
        }
      }
    
    
      startTimer = () => {
        this.interval = setInterval(() => {    
          this.setState({           
            miliSec: this.state.miliSec === 100 ? 0 : this.state.miliSec + 1,
            Sec: this.state.miliSec === 60 ? this.state.Sec + 1 :
              this.state.Sec
          })
    
          if (this.state.Sec === 60) {
            this.setState({
              min: this.state.Sec === 60 ? this.state.min + 1 :
                this.state.min,
              Sec: 0,
            })
          }
        }, 1000);
      }
      startTimerNow = () => {
    
        this.setState({
            start: false,
            pause: true,
            resume: false,
            reset: true,
        })
        this.startTimer();    
      }
      pauseTimer = () => {
        this.setState({
          pause: false,
          resume: true,
    
        })
        clearInterval(this.interval);
    
      }
      resumeTimer = () => {
    
        this.setState({
          resume: false,
          pause: true
        })
        setInterval(this.startTimer());
    
      }
    
      resetTimer = () => {
        clearInterval(this.interval);
        this.setState({
          resume: true,
          pause: false,
          miliSec: 0,
          Sec: 0,
          min: 0,
    
        })
      }
    
    
      render() {
    return(
      <>
      <div className="App">
     <div className="App2">

       <h1>React Stopwatch</h1>       
       <p data-testid="time">
         {this.state.min < 10 ? '0' + this.state.min : this.state.min} 
         :{this.state.Sec < 10 ? '0' + this.state.Sec : this.state.Sec}  
         :{this.state.miliSec < 10 ? '0' + this.state.miliSec : this.state.miliSec}
       </p>

       {  this.state.pause === true ?
         <button onClick={this.pauseTimer} style={{ margin: "5px" }} data-testid="pause">
           Pause</button>
         :(this.state.resume === true ) ?
           <button onClick={this.resumeTimer} style={{ margin: "5px" }} data-testid="resume">Resume</button>
          : 
          <button onClick={this.startTimerNow} style={{ margin: "5px" }} data-testid="start">Start
           </button>
         }

       {this.state.reset === false ? <button data-testid="reset" className='rsbtn' onClick={this.resetTimer} disabled="disabled" >Reset</button>
         : <button onClick={this.resetTimer}  data-testid="reset" className='rsbtn'>Reset</button>

       }

        <p style={{display:'none'}}>learn react</p>
     </div>
   </div>
     </>
    )
 }
}

export default Stopwatch;