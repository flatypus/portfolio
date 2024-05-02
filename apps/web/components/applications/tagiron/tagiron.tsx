import { useState, useEffect } from "react";

export default function TagIron(): JSX.Element {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000/tagiron");

    ws.onopen = () => {
      console.log("Connected to server!");
    };

    ws.onmessage = (msg) => {
      console.log(msg);
    };

    setSocket(ws);
  }, []);

  return <div className="h-full w-full">Hello!</div>;
}
