export default function final(next) {
  return function (action) {
    action.payload.value = Object.values(action.payload).reduce((a, b) => Math.max(a, b), 0);
    next(action);
  };
}
