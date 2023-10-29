import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './styles/todolist.module.css';
import { dummyData } from 'src/constants/data';

interface IProps {
  setList: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
        content: string;
      }[]
    >
  >;
}

type TA = {
  id: number;
  name: string;
  content: string;
};

const InputSection = ({ setList }: IProps) => {
  const [inputState, setInputState] = useState({
    id: '',
    name: '',
    content: '',
  });
  const [count, setCount] = useState<number>(dummyData.length + 1);

  const inputStateHandler = (key: keyof TA, value: string) => {
    setInputState((prev) => ({ ...prev, [key]: value }));
  };

  const insertContentHandler = () => {
    setCount((prev) => (prev += 1));

    setList((prev) => [
      ...prev,
      {
        id: count,
        name: inputState.name,
        content: inputState.content,
      },
    ]);
  };

  return (
    <div className={styles.inputSection}>
      <input
        placeholder='이름'
        className={styles.nameInput}
        type='text'
        value={inputState.name}
        onChange={(e) => inputStateHandler('name', e.target.value)}
      />
      <input
        placeholder='내용'
        className={styles.contentInput}
        type='text'
        value={inputState.content}
        onChange={(e) => inputStateHandler('content', e.target.value)}
      />
      <button onClick={insertContentHandler}>작성하기</button>
    </div>
  );
};

export default InputSection;
