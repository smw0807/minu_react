import React, { useState } from "react";

import "./App.css";

let box: JSX.Element = <div></div>;

interface IProfile {
  name: string;
}

function App() {
  // let [ user, setUser ] = useState('kim');
  let [user, setUser] = useState<string | number>("kim");
  return (
    <div className="App">
      <h4>안녕하세요</h4>
      <Profile name="minwoo" />
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
