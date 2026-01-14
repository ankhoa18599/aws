"use client";

import {useState, useEffect} from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("Loading...");
  const [debugInfo, setDebugInfo] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/hello`;

        const res = await fetch(apiUrl);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        setMessage(data.message);
        setDebugInfo(JSON.stringify(data, null, 2));
      } catch (error: any) {
        setMessage("Failed to fetch data");
        setDebugInfo(error.toString());
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-sans">
      <h1 className="text-4xl font-bold mb-4">AWS Serverless Demo</h1>

      <div className="p-6 border rounded-lg shadow-lg bg-gray-50 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          API Response:
        </h2>

        {/* Dòng này sẽ hiện "Hello Khoa..." nếu thành công */}
        <p className="text-2xl text-green-600 font-bold mb-4">{message}</p>

        <details>
          <summary className="cursor-pointer text-sm text-gray-500">
            View Debug Info
          </summary>
          <pre className="mt-2 text-xs bg-gray-800 text-white p-2 rounded overflow-auto">
            {debugInfo}
          </pre>
        </details>
      </div>
    </div>
  );
}
