import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { TbArrowsSort } from "react-icons/tb";

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'timestamp', direction: 'descending' });

  useEffect(() => {
    axios.get('http://localhost:8000/fetchemail/') // Adjust the URL to your API endpoint
      .then(response => {
        setNewsData(response.data.news);
        setFilteredNews(response.data.news);
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
        news.subject.toLowerCase().includes(searchTerm.toLowerCase().replace('google alert - ', '')) ||
        news.headline.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNews(filtered);
    }
  };

  const sortNews = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    const sorted = [...filteredNews].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      return 0;
    });
    setFilteredNews(sorted);
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
            <th onClick={() => sortNews('_id')}>Serial No <TbArrowsSort /></th>
            <th onClick={() => sortNews('subject')}>Subject <TbArrowsSort /></th>
            <th>News</th>
            <th onClick={() => sortNews('timestamp')}>Timestamp <TbArrowsSort /></th>
          </tr>
        </thead>
        <tbody>
          {filteredNews.map((news, index) => (
            <tr key={index}>
              <td>{news._id}</td>
              <td>{news.subject.replace('Google Alert - ', '')}</td>
              <td>{news.headline}</td>
              <td>{new Date(news.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsPage;
