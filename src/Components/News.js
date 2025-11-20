import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import Newsitem from './Newsitem';
import Spinner from './Spinner';

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 9,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    this.fetchNews();
  }

  // ✅ Fetch News function
  fetchNews = async () => {
    const { page } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: this.state.articles.concat(parsedData.articles || []),
        totalResults: parsedData.totalResults || 0,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  };

  // ✅ Called when user scrolls down
  fetchMoreData = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.fetchNews
    );
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Asha's Newsapp - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
            style={{ overflow: "visible" }}    
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    source={!element.source?.name ? "Unknown" : element.source.name}
                    author={!element.author ? "Unknown" : element.author}
                    date={element.publishedAt}
                    title={element.title ? element.title.slice(0, 40) : " "}
                    discription={
                      element.description ? element.description.slice(0, 80) : " "
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
