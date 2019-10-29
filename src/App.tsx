import React from 'react';
import { translate } from './service';

const App: React.FC = () => {
  translate({ q: '我是学生, 你吃了吗?', to: 'jp' }).then(v => {
    console.log(v);
  });
  return <div className="App">Input</div>;
};

export default App;
