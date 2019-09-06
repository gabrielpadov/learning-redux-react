import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { bindActionCreators } from 'redux';
import { clickButton } from "./actions";

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { 
      clickButton, 
      newValue
    } = this.props;

    const { inputValue } = this.state;

    return (
      <div className="App container text-center" style={{ paddingTop: '50px' }}>
        <input 
          onChange={this.inputChange}
          type='text'
          value={inputValue}
        />
        <button onClick={ () => clickButton(inputValue) }>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(App);