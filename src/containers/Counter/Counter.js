import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from '.././../store/actions';

const countConst = 10;

class Counter extends Component {
  render() {
    console.log("Counter", this.props);
    
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label={`Add ${countConst}`}
          clicked={() => this.props.onAddCounter(countConst)}
        />
        <CounterControl
          label={`Subtract ${countConst}`}
          clicked={() => this.props.onSubtractCounter(countConst)}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.storedCounter)}>Store result</button>
        <ul>
          {this.props.storedResults.map((r, index) => {
            return (
              <li key={index} onClick={() => this.props.onDeleteResult(index)}>
                {r}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  
  return {
    storedCounter: state.counterReducer.counter,
    storedResults: state.resultReducer.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: (count) => dispatch({ type: actionTypes.ADD, value: count }),
    onSubtractCounter: (count) => dispatch({ type: actionTypes.SUBTRACT, value: count }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result:result }),
    onDeleteResult: (index) =>
      dispatch({ type: actionTypes.DELETE_RESULT, value: index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
