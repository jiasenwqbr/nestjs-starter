/*  属性装饰器
    同样使用@符号给属性添加装饰器
    他会返回两个参数
    1.原形对象
    2.属性的名称
 */

const currency: PropertyDecorator = (target: any, key: string | symbol) => {
  console.log(target, key);
};

class Person {
  @currency
  public name: string;
  constructor() {
    this.name = 'Jason';
  }
  getName() {
    return this.name;
  }
}

const p = new Person();
p.getName();
