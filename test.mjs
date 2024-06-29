import store from './store.mjs';
import m1 from './m1.mjs';
import m2 from './m2.mjs';
import m3 from './m3.mjs';

store.applyMiddlewares([m1, m2, m3]);

store.dispatch({ type: 'FOO', payload: {} });
