import { parse } from 'acorn'
import Scope from './scope'

export function runInSandbox(code: string, context: any = {}) {
  const ast = parse(code)
  const globalScope = new Scope('global');

  globalScope.parentScope = null;
}
