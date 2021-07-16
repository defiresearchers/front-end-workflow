function log(value) {
  console.log("\n\n____LOG:", value)
}

class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
  get peek() {
    return this.items[this.top]
  }
  push(value) {
    this.top += 1
    this.items[this.top] = value
  }
  pop() {
    this.items[this.top] = undefined;
    this.top -= 1
  }
}

describe("My Stack", () => {

  let stack;
  beforeEach(() => {
    stack = new Stack();
  })

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
  it("can push to the top", () => {
    stack.push('item')
    expect(stack.top).toBe(0)
    expect(stack.peek).toEqual('item')
  });
  it("can pop", () => {
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');
    stack.pop()
    expect(stack.top).toBe(1)
    expect(stack.peek).toEqual('item2')
  });
});
