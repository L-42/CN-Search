import { stringify } from 'qs';
export function getRandomNum(digitNum: number) {
  let str = '';
  while (str.length !== digitNum) {
    let temp = Math.floor(Math.random() * 10);
    if (temp !== 0) {
      str += temp;
    }
  }
  return str;
}

export function jsonp({ url, data }: { url: string; data?: object }) {
  return new Promise((resolve, reject) => {
    let callbackName: string = `jsonpCB_${Date.now()}`;
    let queryString = stringify({ ...data, callback: callbackName });
    let jsonpURL = `${url}?${queryString}`;
    let jsNode = document.createElement('script');
    jsNode.src = jsonpURL;

    // 触发callback，触发后删除js标签和绑定在window上的callback
    (window as any)[callbackName] = (result: any) => {
      delete (window as any)[callbackName];
      document.body.removeChild(jsNode);
      if (result) {
        resolve(result);
      } else {
        reject('没有返回数据');
      }
    };
    // js加载异常的情况
    jsNode.addEventListener(
      'error',
      () => {
        delete (window as any)[callbackName];
        document.body.removeChild(jsNode);
        reject('JavaScript资源加载失败');
      },
      false
    );
    // 添加js节点到document上时，开始请求
    document.body.appendChild(jsNode);
  });
}
