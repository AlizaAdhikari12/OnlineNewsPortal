import React, { useState, useEffect } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './politics_option.scss';
import Skeleton from 'react-loading-skeleton';

function Politics_option() {
    const [politicsData, setPoliticsData] = useState([]);

    const fetchData = async (category, setData) => {
        try {
            const response = await axios.get("https://newsapi.org/v2/top-headlines", {
                params: {
                    country: "us",
                    category: category,
                    apiKey: "066e5b38f5104c2695c06adf8af4ca2c"
                }
            });
            setData(response.data.articles.slice(0, 2));
        } catch (error) {
            console.log("error while fetching data");
        }
    }

    useEffect(() => {
        fetchData("politics", setPoliticsData);
    }, []);

    const renderArticle = (articles, category) => {
        if (articles.length === 0) {
            return <div className="stories-post-content" >
            <div className=" border-b-3 border-black-500 border-l-2 pl-2 pr-2">
                <Link to="/Business" className="post-tag"></Link>
                <h5 className="post-title pb-3">
                    <Skeleton count={1} width={'60%'}/>
                </h5>
                <div className="pusblishment mt-2 mb-3 border-black-500 border-b-2">
                <Skeleton count={1} width={'40%'}/>
                </div>
            </div>
        </div>
        }

        return articles.map((item, index) => (
            <div className="stories-post-content" key={index}>
                <div className=" border-b-3 border-black-500 border-l-2 pl-2 pr-2">
                    <Link to="/Business" className="post-tag"></Link>
                    <h5 className="post-title pb-3">
                        <a href={item.url} className="stories-post-details" target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                    </h5>
                    <div className="pusblishment mt-2 mb-3 border-black-500 border-b-2">
                        <ul className="publisher">
                            <li>
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                {new Date(item.publishedAt).toLocaleDateString()}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <Container>
            <Row>
                {renderArticle(politicsData, "politics")}
            </Row>
        </Container>
    );
}

export default Politics_option;

   