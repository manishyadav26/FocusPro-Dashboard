import { useEffect, useState } from "react";

function QuoteBox() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "https://api.allorigins.win/get?url=https://zenquotes.io/api/random"
        );
        const data = await response.json();
        const parsedQuote = JSON.parse(data.contents);
        setQuote(parsedQuote[0].q + " — " + parsedQuote[0].a);
      } catch (error) {
        console.error("Failed to fetch quote", error);
        setQuote("✨ Stay focused and keep growing!");
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="bg-indigo-100 dark:bg-indigo-900 text-center p-4 rounded shadow mb-6">
      <p className="italic text-lg">"{quote}"</p>
    </div>
  );
}

export default QuoteBox;
