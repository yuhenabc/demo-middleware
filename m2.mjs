import counter from './counter.mjs';

export default function m2(next) {
  return function (action) {
    console.log('m2 start');
    action.payload.m2 = counter.next().value;
    next(action);
    action.payload.m2a = counter.next().value;
    console.log('m2 end:');
    console.table([action.payload]);
  };
}
