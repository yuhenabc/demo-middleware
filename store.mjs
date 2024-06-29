const store = {
  dispatch: (action) => {
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
