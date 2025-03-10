import { useState } from "react";

export default function WorkingTest() {
  const [message, setMessage] = useState("Start Working Test");

  async function working() {
    if (message === "Frontend and backend are working together!") {
      setMessage("Start Working Test");
    } else {
      fetch("/api/working")
        .then((response) => response.text())
        .then((data) => setMessage(data))
        .catch((error) => console.log(error));
    }
  }

  return (
    <div>
      <h1>Working Test</h1>
      <h2 onClick={working}>{message}</h2>
    </div>
  );
}
