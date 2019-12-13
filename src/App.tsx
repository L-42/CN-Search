import React from 'react';
import { Card, Button } from 'antd';
import { translate } from './service';
import styles from './App.module.scss';

const App: React.FC = () => {
  // translate({ q: '我是学生, 你吃了吗?', to: 'jp' }).then(v => {
  //   console.log(v);
  // });
  return (
    <div className={styles.app}>
      <div className={styles.topBar}>
        <div className={styles.title}>Card List</div>
        <div className={styles.buttonGroup}>
          <Button className={styles.editBtn} type="primary" size="large">
            Edit
          </Button>
          <Button
            className={styles.plusBtn}
            type="primary"
            icon="plus"
            shape="circle"
            size="large"
            onClick={() => console.log('HH')}
          ></Button>
        </div>
      </div>

      <div className={styles.cardContainer}>
        {Array(20)
          .fill(0)
          .map((v, index) => (
            <Card key={index} className={styles.myCard} hoverable loading>
              {index}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis totam enim quam ipsum illum earum repellendus
              iste? Recusandae officiis facere error quae, perspiciatis consequuntur dolor sapiente porro doloremque et?
            </Card>
          ))}
      </div>
    </div>
  );
};

export default App;
