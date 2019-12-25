import { get } from '../utils/netUtil';

export function LoginFunc() {
  return get(`http://www.pmhuai.top:3001/abc/api/testLogin/get_test`, {});
}
