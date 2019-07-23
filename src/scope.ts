import { ScopeType } from './type'
import global from './global'
export default class Scope {
  declarations = Object.create(null)
  type!: ScopeType
  parentScope!: any
  globalDeclaration!: any;

  constructor(type: ScopeType) {
    this.type = type
    this.globalDeclaration = global;
  }

  // 函数作用域
  varDeclare(name: string, value: any) {
      let targetScope = this;
      while (targetScope.type === 'block') {
        targetScope = targetScope.parentScope;
      }
      targetScope.declarations[name] = value;
  }

  setValue(name: string, value: any) {
    if (this.declarations.hasOwnProperty(name)) {
      this.declarations[name] = value;
    } else if (this.parentScope.declarations.hasOwnProperty(name)) {
      this.parentScope.declarations[name] = value;
    } else if (this.globalDeclaration.hasOwnProperty(name)) {
      this.globalDeclaration[name] = value;
    } else {
      throw new ReferenceError(`${name} is not declared`)
    }
  }

  getValue (name: string) {
    if (this.declarations.hasOwnProperty(name)) {
      return this.declarations[name]
    } else if (this.parentScope.declarations.hasOwnProperty(name)) {
      return this.parentScope.declarations[name];
    } else if (this.globalDeclaration.hasOwnProperty(name)) {
      return this.globalDeclaration[name]
    } else {
      throw new ReferenceError(`${name} is not declared`)
    }
  }
}
