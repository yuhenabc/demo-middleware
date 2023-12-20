import counter from './counter.mjs';

export default function m1(next) {
  return function (action) {
    console.log('m1 start');
    action.m1 = counter.next().value;
    next(action);
    action.m1after = counter.next().value;
    console.log('m1 end:', action);
  };
}
