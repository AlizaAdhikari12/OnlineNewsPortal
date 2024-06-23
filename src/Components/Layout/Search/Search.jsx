import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

function Search() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  // Function to fetch data based on the selected category
  const fetchData = async (selectedCategory) => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          category: selectedCategory,
          country: 'us',
          apiKey: '066e5b38f5104c2695c06adf8af4ca2c'
        }
      });
      setData(response.data.articles);
      setFilteredData(response.data.articles); // Initially show all data
    } catch (error) {
      console.log("You're data is unable to fetch", error);
    }
  };

  // useEffect to fetch data when the category changes
  useEffect(() => {
    if (category) {
      fetchData(category); // Fetch data only if a category is selected
    }
  }, [category]);

  // Handler for search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value && !category) {
      setCategory('general'); // Set a default category if no category is selected
    }
    // Filter data based on query
    const lowercaseQuery = value.toLowerCase();
    const filtered = data.filter(item =>
      (item.title && item.title.toLowerCase().includes(lowercaseQuery)) ||
      (item.description && item.description.toLowerCase().includes(lowercaseQuery)) ||
      (item.content && item.content.toLowerCase().includes(lowercaseQuery))
    );
    setFilteredData(filtered); // Update filtered data based on query
  };

  return (
    <>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-warning"     onClick={()=>{console.log("hello the button is clicked")}}>Search</Button>
      </Form>
    </>
  );
}

export default Search;
