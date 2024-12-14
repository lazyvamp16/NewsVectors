import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

const SentimentPage = () => {
  const [newsData, setNewsData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/fetchemail/') // Adjust the URL to your API endpoint
      .then(response => {
        setNewsData(response.data.messages);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1>Sentiment Analysis</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Headline</th>
            <th>Sentiment</th>
            <th>Sentiment Score</th>
          </tr>
        </thead>
        <tbody>

          {newsData.map((news, index) => (
            <tr key={index}>
              <td>{news._id}</td>
              <td>{news.subject.replace('Google Alert - ', '')}</td>
              <td>{news.sentiment}</td>
              <td>{news.headline}</td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SentimentPage;
