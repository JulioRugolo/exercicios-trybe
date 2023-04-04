// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './Redux/actions';

class App extends React.Component {
  render() {
    const { dispatch, countState, numberOfClicks } = this.props;
    return (
      <div>
        <h1>Contador</h1>
        <h2>{countState}</h2>
        <h3>{numberOfClicks}</h3>
        <button onClick={() => dispatch(actionCreator())}>Incrementa 1</button>
        <button onClick={() => dispatch(actionCreator(5))}>Decrementa 5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  numberOfClicks: state.counterReducer.clicks
});

export default connect(mapStateToProps)(App)