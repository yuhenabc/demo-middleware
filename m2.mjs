import counter from './counter.mjs';

export default function m2(next) {
  return function (action) {
    console.log('m2 start');
    action.m2 = counter.next().value;
    next(action);
    action.m2after = counter.next().value;
    console.log('m2 end:', action);
  };
}
