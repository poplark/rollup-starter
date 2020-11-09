import { version } from './package.json';
import { foo, invoke } from './src/foo';

function test () {
  console.log(`hello roll up, I'm ${foo}`);
  invoke();
}

export { version };
export { test };
