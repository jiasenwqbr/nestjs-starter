/* 
  类装饰器 主要是通过@符号添加装饰器
  他会自动把class的构造函数传入到装饰器的第一个参数 target
  然后通过prototype可以自定义添加属性和方法 
*/
const decotators: ClassDecorator = (target: any) => {
  target.prototype.name = 'Jason';
};
@decotators
class Jason {
  constructor() {}
}

const jason: any = new Jason();
console.log(jason.name);
