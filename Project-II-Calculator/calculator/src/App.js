import React from 'react';
import './App.scss';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonsContainer from './components/ButtonComponents/ButtonsContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcDisplay: '0',
      keySeq: []
    };
  }

  buttonEvent = (event) => {
    if (event.target.textContent === 'clear') {
      this.setState({calcDisplay: '0', keySeq: []});
    } else if (event.target.textContent === '=') {
      this.setState({calcDisplay: eval(this.state.keySeq.join(''))});
      this.setState({keySeq: []});
    } else if (event.target.textContent === '÷') {
      this.state.keySeq.push('/');
      this.setState({keySeq: this.state.keySeq});
      this.setState({calcDisplay: this.state.keySeq.join('')});
    } else if (event.target.textContent === '×') {
      this.state.keySeq.push('*');
      this.setState({keySeq: this.state.keySeq});
      this.setState({calcDisplay: this.state.keySeq.join('')});
    } else {
      this.state.keySeq.push(event.target.textContent);
      this.setState({keySeq: this.state.keySeq});
      this.setState({calcDisplay: this.state.keySeq.join('')});
    }
  }

  render() {
    return (
      <div className='calculator'>
        <CalculatorDisplay calcDisplay={this.state.calcDisplay} />
        <ButtonsContainer whenClicked={this.buttonEvent} />
      </div>
    );
  }
}

/*
const App = () => {
  return (
    <div className='calculator'>
      <CalculatorDisplay />
      <ButtonsContainer />
    </div>
  );
};
*/
  /*
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};
*/

export default App;
