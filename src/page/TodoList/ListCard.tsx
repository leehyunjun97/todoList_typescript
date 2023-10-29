import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './styles/todolist.module.css';

interface IProps {
  list: {
    id: number;
    name: string;
    content: string;
  };

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

const ListCard = ({ list, setList }: IProps) => {
  const [newContent, setNewContent] = useState(list.content);
  const [isEdit, setIsEdit] = useState(false);

  const toggleFunc = () => {
    setIsEdit(!isEdit);
    setNewContent(list.content);
  };

  const editHandler = () => {
    setList((prev) =>
      prev.map((item) => {
        console.log(item.id, list.id);
        return item.id === list.id ? { ...list, content: newContent } : item;
      })
    );
    setIsEdit(!isEdit);
  };

  const removeHandler = () => {
    setList((prev) => prev.filter((item) => item.id !== list.id));
  };

  return (
    <li className={styles.listCard}>
      {isEdit ? (
        <>
          <span>{list.name}</span>
          <input
            type='text'
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button onClick={editHandler}>수정하기</button>
          <button onClick={toggleFunc}>수정취소</button>
        </>
      ) : (
        <>
          <span>{list.id}</span>
          <span>{list.name}</span>
          <span>{list.content}</span>
          <button onClick={toggleFunc}>수정</button>
          <button onClick={removeHandler}>삭제</button>
        </>
      )}
    </li>
  );
};

export default ListCard;
