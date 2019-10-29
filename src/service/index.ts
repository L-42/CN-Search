import md5 from 'crypto-js/md5';
import { getRandomNum, jsonp } from '../utils';
import { BAIDU_TRANSLATE_CONF } from '../constant';


export function translate({ q, from = 'auto', to }: { q: string; from?: string; to: string }) {
  let salt = getRandomNum(10);
  let { appid, key } = BAIDU_TRANSLATE_CONF;
  // appid+q+salt+密钥 的MD5值
  let sign = md5(appid + q + salt + key).toString();
  return jsonp({
    url: '//api.fanyi.baidu.com/api/trans/vip/translate',
    data: {
      q,
      from,
      to,
      appid: BAIDU_TRANSLATE_CONF.appid,
      salt,
      sign,
    },
  });
}
