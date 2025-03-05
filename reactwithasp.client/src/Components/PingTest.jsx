import { useState } from "react";

export default function PingTest() {
  const [message, setMessage] = useState("Start Ping Test");

  async function ping() {
    if (message === "Pong") {
      setMessage("Start Ping Test");
    } else {
      fetch("/api/ping")
        .then((response) => response.text())
        .then((data) => setMessage(data))
        .catch((error) => console.log(error));
    }
  }

  return (
    <div>
      <h1>Ping Test</h1>
      <h2 onClick={ping}>{message}</h2>
    </div>
  );
}
