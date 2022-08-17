import React, { useEffect, useState } from 'react';
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const Content = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)

    // fucntion to fetch news for page 1 using the default value
    const fetchNews = async () => {
        setLoading(true)
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22efedcbac3a4054a419155c014ec57b&pageSize=${props.pageSize}&page=${page}`
        props.setProgress(30)
        let data = await fetch(url);
        props.setProgress(50)
        let parsedData = await data.json();
        props.setProgress(70)
        setArticles(parsedData.articles)
        setLoading(false)
        props.setProgress(100)
    }

    // useEffect function for mount initial component
    useEffect(() => {
        document.title = `News App`;
        fetchNews();
        // eslint-disable-next-line
    }, [])

    // fucnction to fetch news from page 2. Pages are decided according to page size defined on App.js
    const fetchMoreNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22efedcbac3a4054a419155c014ec57b&pageSize=${props.pageSize}&page=${page+1}`
        setPage(page + 1)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

    return (
        <>
            <h3 className="text-center" style={{ margin: '35px 0px', marginTop: '80px' }}> News Headlines</h3>
            {/* Spinner component using .gif spinner */}
            {loading && <Spinner />}
            {/* Infinite vertical scroll package */}
            <InfiniteScroll dataLength={articles.length}
                // parameter for function which has to be called after first iteration
                next={fetchMoreNews}
                // parameter which checks whether more data is available to be showm or not
                hasMore={articles.length !== totalResults}
                // parameter for loader conponent
                loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {/* Map function to process array and pass each element of array to element */}
                        {articles.map((element) => {
                            return <div className="col-md-4 " key={element.url}>
                                <NewsItem newsUrl={element.url} imageUrl={element.urlToImage} title={element.title ? element.title : ""} author={element.author} description={element.description ? element.description : ""} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

// provide the default values to variables
Content.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

// Define the data types of the proptypes
Content.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default Content
