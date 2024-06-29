import counter from './counter.mjs';

export default function m1(next) {
  return function (action) {
    console.log('m1 start');
    action.payload.m1 = counter.next().value;
    next(action);
    action.payload.m1a = counter.next().value;
    console.log('m1 end:');
    console.table([action.payload]);
  };
}
