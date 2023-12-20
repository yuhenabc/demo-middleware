const store = {
  dispatch: (action) => {
    console.log('dispating action:', action);
  },
  applyMiddlewares(middlewares) {
    this.dispatch = middlewares.reduceRight(
      (next, middleware) => middleware(next),
      this.dispatch
    );
  },
};

export {
  store,
};
