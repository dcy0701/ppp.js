import { runInSandbox } from '../src/ppp';

runInSandbox(`
    var a = 1 + 1;
    var d = 'string';
    var c = a + d;

    console.log(123)
`)