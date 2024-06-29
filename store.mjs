const store = {
  dispatch: (action) => {
    action.payload = {
      value: Object.values(action.payload).reduce((a, b) => Math.max(a, b), 0)
    }
    console.log('dispating action:');
    console.table([action.payload]);
  },
  applyMiddlewares(middlewares) {
    this.dispatch = middlewares.reduceRight(
      (next, middleware) => middleware(next),
      this.dispatch
    );
  },
};

export default store;
