import { version } from '../package.json';
import { foo, invoke } from './foo';

function test () {
  console.log(`hello roll up, I'm ${foo}`);
  invoke();
}

export { version };
export { test };