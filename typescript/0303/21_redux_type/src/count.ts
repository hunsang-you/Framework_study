import { Provider } from "react-redux";
import { createStore } from "redux";
// npm install redux react-redux

interface Counter {
  count: number;
}

const val: Counter = { count: 0 };

function reducer(state = val, action: any) {
  if (action.type === "증가") {
    return { count: state.count + 1 };
  } else if (action.type === "감소") {
    return { count: state.count - 1 };
  } else {
    return val;
  }
}

const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;

// ReactDOM.render();
