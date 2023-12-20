function* createCounter() {
  let i = 0;
  while (true) {
    yield ++i;
  }
}

const counter = createCounter();

export default counter;
