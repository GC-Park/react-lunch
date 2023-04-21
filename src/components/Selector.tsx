import React from 'react';
import '../styles/Selector.css';

interface Props<T> {
  optionList: Array<T>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filterRef: React.RefObject<HTMLSelectElement>;
}

const Selector = <T extends string>(props: Props<T>) => {
  return (
    <select ref={props.filterRef} onChange={props.onChange} defaultValue={props.filterRef.current?.value}>
      {props.optionList.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Selector;
