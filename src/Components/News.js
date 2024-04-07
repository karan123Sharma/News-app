import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
];
  constructor() {
    super();
    this.state = {
        articles : this.articles,
        page :1,
    };
  }
  async componentDidMount(){
let url = {"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=09498d16dcac499aa33edc993bf7a8e2&page={}"};
    let data =  await fetch(url);
    let pasedata = await data.json();
    this.setState({articles: pasedata.articles}); 
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsLion - Top HeadLines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
            <NewsItem
              title={element.title}
              description={element.description}
              imgUrl={element.urlToImage}
              newsUrl = {element.url}
            />
          </div>
        })}
        </div>
      </div>
    );
  }
}

export default News;
