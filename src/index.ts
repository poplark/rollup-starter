import { foo, invoke } from './foo';

/**
 * 版本号
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const version: string = __buildVersion;

/**
 * test 方法
 */
function test(): void {
  console.log(`hello roll up, I'm ${foo}`);
  invoke();
}

export { version };
export { test };
