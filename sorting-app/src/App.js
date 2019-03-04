import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './questions/Introduction'
import Question from './questions/QuestionForm'
import RevealHouse from './questions/RevealHouse'
import { Button } from 'semantic-ui-react'; // Icon

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gryffindor: 0,
      ravenclaw: 0,
      slytherin: 0,
      hufflepull: 0,
      currentQuestion: 0,
      nextDisabled: false,
    }
    this.handleNext = this.handleNext.bind(this)
    this.addPointsToHouse = this.addPointsToHouse.bind(this)
  }
  componentDidUpdate() {
    //console.log(this.state);
  }
  handleNext(e) {
    //console.log(this.state.currentQuestion);
    this.setState({ currentQuestion: (this.state.currentQuestion + 1) % 5 })
  }

  renderQuestion() {
    switch (this.state.currentQuestion) {
      case 0:
        return <Introduction />
      case 1:
        return <Question addPts={this.addPointsToHouse} question="Which cat is best?"
          sly="Slytherin cat" rav="Ravenclaw cat"
          huf="Huffpull cat" gry="Gryffindor cat" orders="[0,1,2,3]"/>
      case 2:
        return <Question addPts={this.addPointsToHouse} question="Which cat is best?2"
          sly="Slytherin cat" rav="Ravenclaw cat"
          huf="Huffpull cat" gry="Gryffindor cat" orders="[1,2,0,3]"/>
      case 3:
        return <RevealHouse sly={this.state.slytherin} rav={this.state.ravenclaw}
          huf={this.state.hufflepull} gry={this.state.gryffindor} />
      default:
        return "test"

    }
  }

  addPointsToHouse(houseNum, pointsToAdd) {
    //console.log('state' + this.state + this.state.ravenclaw)
    //console.log("testing add points to house" + houseNum + " " + pointsToAdd)
    switch (houseNum) {
      case 0: case '0':
        this.setState({ gryffindor: this.state.gryffindor + pointsToAdd })
        break;
      case 1: case '1':
        this.setState({ ravenclaw: this.state.ravenclaw + pointsToAdd })
        break;
      case 2: case '2':
        this.setState({ slytherin: this.state.slytherin + pointsToAdd })
        break;
      default:
        this.setState({ hufflepull: this.state.hufflepull + pointsToAdd })
    }
    // possible that we automatically advance the question
    // then we don't need the button and don't have to check whether
    // or not the user made a choice (a choice --> advance [no redos])
  }
  render() {
    let nextButton;
    if (this.state.nextDisabled)
      nextButton = <Button disabled>Next</Button>
    else
      nextButton = <Button onClick={this.handleNext}>Next</Button>
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.renderQuestion()}
          {nextButton}
        </header>
      </div>
    );
  }
}

export default App;
