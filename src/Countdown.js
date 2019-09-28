import React, { Component } from "react";


class Countdown extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 10;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
            });
            } else {
                clearInterval(this.timer);
                this.setState({ timerOn: false });
                alert("Countdown ended");
            }
        }, 10);
    };

    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
    };
    
    resetTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({
                timerTime: this.state.timerStart
            });
        }
    };

    adjustTimer = input => {
        const { timerTime, timerOn } = this.state;
        if (!timerOn) {
            if (input === "incMinutes" && timerTime + 60000 < 216000000) {
                this.setState({ timerTime: timerTime + 60000 });
                } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
                    this.setState({ timerTime: timerTime - 60000 });
                } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
                    this.setState({ timerTime: timerTime + 1000 });
                } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
                    this.setState({ timerTime: timerTime - 1000 });
            }
        }
    };

    render(){
        const { timerTime, timerStart, timerOn } = this.state;
        let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

        return (
            <center>
                <div className="Countdown">
                <div className="Countdown-header">Countdown</div>
                <div className="Countdown-label">Minutes : Seconds</div>
                <div className="Countdown-display">
                    <button onClick={() => this.adjustTimer("incMinutes")}>
                    +
                    </button>
                    <button onClick={() => this.adjustTimer("incSeconds")}>
                    +
                    </button>
        
                    <div className="Countdown-time">
                    {minutes} : {seconds}
                    </div>
                    <button onClick={() => this.adjustTimer("decMinutes")}>
                    -
                    </button>
                    <button onClick={() => this.adjustTimer("decSeconds")}>
                    -
                    </button>
                </div>
                <br></br>
                {timerOn === false && (timerStart === 0 || timerTime === timerStart) &&(
                    <button className="Button-start" onClick={this.startTimer}>
                    Start
                    </button>
                )}
                </div>
            </center>
        );
    }
}
      
export default Countdown;