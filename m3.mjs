import counter from './counter.mjs';

export default function m3(next) {
  return function (action) {
    console.log('m3 start');
    action.payload.m3 = counter.next().value;
    next(action);
    action.payload.m3a = counter.next().value;
    console.log('m3 end:');
    console.table([action.payload]);
  };
}
