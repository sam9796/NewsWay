import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner.js'
import InfiniteScroll from 'react-infinite-scroll-component'
import newsContext from '../context/newsContext.js'
function News(props) {
const {country,category,apiKey,pageSize}=props
    const  [articles,setArticles]=useState([])
  const [page,setPage]=useState(1)
  const [loading,setLoading]=useState(true)
  const [totalResults,setTotalResults]=useState(0)
 const fetchData=async ()=>{
    props.setProgress(10)
    const url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true)
    const ft=await fetch(url)
    props.setProgress(30)
    const resp=await ft.json()
    props.setProgress(70)
    setArticles(resp.articles)
    setTotalResults(resp.totalResults)
    setLoading(false)
    props.setProgress(100)
 }
 const capitalizeFirstLetter=(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1);
 }
 useEffect(()=>{
    document.title = `${capitalizeFirstLetter(category)} - NewsMonkey`;
    fetchData()
 },[])
 const fetchMoreData=async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`;
    setPage(page+1) 
    let ft= await fetch(url);
    let resp = await ft.json()
    setArticles(articles.concat(resp.articles))
    setTotalResults(resp.totalResults)
 }
  return (
    <div className="container my-4">
        <h1 className="text-center my-5">Top {capitalizeFirstLetter(category)} Headlines</h1>
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
      <div className="row">
        {articles.map((element)=>{
       return (<div className="col-md-4">
            <NewsItem description={element.description?element.description:""} title={element.title?element.title:""} url={element.url} urlToImage={element.urlToImage} author={element.author} date={props.date}/>
        </div>) }
        )}
      </div>
      </InfiniteScroll>
    </div>
  )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
