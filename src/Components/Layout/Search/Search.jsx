import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../../css/Search.css';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import Filtered_Search from './Filtered_Search';
import Empty from './Empty';

function Search() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [filterData, setFilterData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async (query) => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?apiKey=300ad6828e164a278c705ebec7cbbfc3&q=${query}`);
      setData(response.data.articles);
      setFilterData(response.data.articles);
    } catch (error) {
      console.log("Error while fetching the data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchData = async () => {
    await fetchData(searchData);

    if (filterData.length > 0) {
      console.log("correct");
      navigate("/Filtered_Search", { state: { filterData } });
    } else {
      console.log("not correct");
      navigate("/Empty");
    }
  };


  console.log(data);

  return (
    <>
      <Form className='search_form'>
        <input
          type="text"
          placeholder='Search'
          value={searchData}
          className='search_input'
          onChange={(e) => setSearchData(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className='search-icon'
          onClick={handleSearchData}
        />
      </Form>
    </>
  );
}

export default Search;
