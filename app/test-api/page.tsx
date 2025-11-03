// app/page.tsx
"use client";
import {useEffect, useState} from "react";

export default function Home() {
  const [data, setData] = useState<unknown>(null);

  useEffect(() => {
    fetch(
      "https://7w6y7nij1a.execute-api.ap-southeast-1.amazonaws.com/prod/hello"
    )
      .then((r) => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <main style={{padding: 24}}>
      <h1>SiuCode x AWS – Hello API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
