import React, { useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState, increment, decrement } from ".";

interface IProfile {
  name: string;
}

function App() {
  let [user, setUser] = useState<string | number>("kim");
  const { count } = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div className="App">
      <h4>안녕하세요</h4>
      <Profile name="minwoo" />
      {count.count}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        증가 버튼
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        감소 버튼
      </button>
    </div>
  );
}

// function Profile(props: { name: string }): JSX.Element {
function Profile(props: IProfile): JSX.Element {
  const { name } = props;
  return (
    <div>
      {props.name} 입니다.
      <div>{name}</div>
    </div>
  );
}

export default App;
