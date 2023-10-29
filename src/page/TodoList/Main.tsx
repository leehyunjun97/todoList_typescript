import React, { useState } from 'react';
import styles from './styles/todolist.module.css';
import ListBody from './ListBody';
import InputSection from './InputSection';
import { dummyData } from 'src/constants/data';

const Main = () => {
  const [list, setList] = useState(dummyData);

  return (
    <div className={styles.main}>
      <ListBody list={list} setList={setList}/>
      <InputSection setList={setList} />
    </div>
  );
};

export default Main;
