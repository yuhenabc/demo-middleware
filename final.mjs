export default function final(next) {
  return function (action) {
    const { m1, m2, m3 } = action;
    action.payload = {
      value: m1 + m2 + m3,
    };
    next(action);
  };
}
