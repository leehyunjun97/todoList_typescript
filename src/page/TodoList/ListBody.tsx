import React, { Dispatch, SetStateAction } from 'react';
import styles from './styles/todolist.module.css';
import ListCard from './ListCard';

interface IProps {
  list: {
    id: number;
    name: string;
    content: string;
  }[];

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

const ListBody = ({ list, setList }: IProps) => {
  return (
    <ul className={styles.listBody}>
      {list.map((item) => (
        <ListCard setList={setList} key={item.id} list={item} />
      ))}
    </ul>
  );
};

export default ListBody;
