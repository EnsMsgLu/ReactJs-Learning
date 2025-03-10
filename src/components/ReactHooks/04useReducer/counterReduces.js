const initialStart = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "incrementByOn":
      return { ...state, count: state.count + action.payload };
    case "decrementByOn":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default { initialStart, reducer };
