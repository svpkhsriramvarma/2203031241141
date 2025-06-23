import React, { useEffect, useState } from 'react';
import { getQuestions } from './api';

function App() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getQuestions()
      .then(setQuestions)
      .catch(err => setError("Failed to load questions"));
  }, []);

  return (
    <div>
      <h1>Campus Test Questions</h1>
      {error && <p>{error}</p>}
      <ul>
        {questions.map((q, index) => (
          <li key={index}>{JSON.stringify(q)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;