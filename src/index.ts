import { foo, invoke } from './foo';

//@ts-ignore
const version: string = __buildVersion;

function test () {
  console.log(`hello roll up, I'm ${foo}`);
  invoke();
}

export { version };
export { test };
