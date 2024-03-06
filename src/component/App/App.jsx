import { useEffect, useState } from "react";
import css from "./App.module.css";

function App() {
  const [clicks, setClicks] = useState(0);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    console.log("Effects are awesome!", clicks);
  }, [clicks]);

  return (
    <div className={css.list}>
      <button className={css.button} onClick={() => setClicks(clicks + 1)}>
        Clicks: {clicks}
      </button>
      <button className={css.button} onClick={() => setDate(Date.now())}>
        Date: {date}
      </button>
    </div>
  );
}

export default App;
