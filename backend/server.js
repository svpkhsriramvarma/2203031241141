const express = require('express');
const axios = require('axios');
const cors = require('cors');
const logEvent = require('./logger');

const app = express();
app.use(cors());
app.use(express.json());

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjAzMDMxMjQxMTQxQHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc1MDY2MzYzMiwiaWF0IjoxNzUwNjYyNzMyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZmQyZWYyZjAtZjI4ZC00MGNlLWJjNjctODU1YTU5MDc5YTk4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3Zwa2ggc3JpcmFtIHZhcm1hIiwic3ViIjoiMzlkZTliZDktYWQwNC00NzE3LWFmOWEtNTIxZWUwMWYzYTk0In0sImVtYWlsIjoiMjIwMzAzMTI0MTE0MUBwYXJ1bHVuaXZlcnNpdHkuYWMuaW4iLCJuYW1lIjoic3Zwa2ggc3JpcmFtIHZhcm1hIiwicm9sbE5vIjoiMjIwMzAzMTI0MTE0MSIsImFjY2Vzc0NvZGUiOiJUUnpnV00iLCJjbGllbnRJRCI6IjM5ZGU5YmQ5LWFkMDQtNDcxNy1hZjlhLTUyMWVlMDFmM2E5NCIsImNsaWVudFNlY3JldCI6ImVuTkdyZXZTZldkZXNrVGIifQ.5qBwLJDaV2Uo_4n66Z48Qofl4vHSnwUNPmW4vsuki90';

app.get('/api/questions', async (req, res) => {
  logEvent('backend', 'info', 'handler', 'Frontend requested questions');

  try {
    const response = await axios.get('http://20.244.56.144/evaluation-service/questions', {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    logEvent('backend', 'info', 'handler', 'Questions fetched successfully');
    res.json(response.data);
  } catch (error) {
    logEvent('backend', 'error', 'handler', `Error fetching questions: ${error.message}`);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
