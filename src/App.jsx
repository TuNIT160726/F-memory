import { useState } from "react";
import "./App.css";
import Anh from "../src/img/anjimegirl.webp";
let today = new Date().toLocaleDateString();
let Time = new Date().toLocaleTimeString();

const welcome = ["Chào mừng", "Rất vui được gặp", "Bạn đến thật đúng lúc"];
let random3 = Math.floor(Math.random() * 3);

function Avatar() {
  return <img src={Anh} />;
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        <b>{welcome[random3]}</b>
      </h1>
      <p>
        Hôm nay là: <b>{today}</b> .Thời gian hiện tại: <b>{Time}</b>.
      </p>
      <Avatar />
    </>
  );
}

export default App;
