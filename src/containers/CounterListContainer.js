import CounterList from "../components/CounterList";
import * as actions from "../actions";
import { connect } from "react-redux";
import getRandomColor from "../lib/getRandomColor";

// store 안의 state 값을 props로 연결
const mapStateToProps = state => ({
  counters: state.counters
});

// 액션 생성 함수를 사용하여 액션을 생성하고 액션을 dispatch 하는 함수를 만든 후 props로 연결
const mapDispatchToProps = dispatch => ({
  onIncrement: index => dispatch(actions.increment(index)),
  onDecrement: index => dispatch(actions.decrement(index)),
  onSetColor: index => {
    const color = getRandomColor();
    dispatch(actions.setColor({ index, color }));
  }
});

// Counter component의 Container component?
const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);

export default CounterListContainer;
