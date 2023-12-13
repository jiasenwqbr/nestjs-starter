class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class C {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Container {
  modules: any;
  constructor() {
    this.modules = {};
  }
  provide(key: string, module: any) {
    this.modules[key] = module;
  }
  get(key) {
    return this.modules[key];
  }
}

const mo = new Container();
mo.provide('a', new A('A'));
mo.provide('c', new C('C'));

class B {
  a: any;
  c: any;
  constructor(container: Container) {
    this.a = container.get('a');
    this.c = container.get('c');
  }

  print() {
    console.log(this.a.name);
    console.log(this.c.name);
  }
}

const b = new B(mo);
b.print();
