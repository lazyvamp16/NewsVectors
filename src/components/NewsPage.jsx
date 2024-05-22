import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/fetchemail/') // Adjust the URL to your API endpoint
      .then(response => {
        setNewsData(response.data.messages);
        setFilteredNews(response.data.messages);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handleSearch = () => {
    if (searchTerm === '') {
      setFilteredNews(newsData);
    } else {
      const filtered = newsData.filter(news =>
        news.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.headlines.some(headline => headline.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredNews(filtered);
    }
  };

  return (
    <div className="container mt-4">
      <h1>News</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search news"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Subject</th>
            <th>News</th>
          </tr>
        </thead>
        <tbody>
          {filteredNews.map((news, index) => (
            <tr key={index}>
              <td>{news.subject}</td>
              <td>
                <ul>
                  {news.headlines.map((headline, i) => (
                    <li key={i}>{headline}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsPage;
