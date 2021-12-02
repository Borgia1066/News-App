import React from "react";
import { getArticles} from "./api";
import { Container, Header } from "semantic-ui-react";
import { ArticleList } from "./comp/ArticleList";
import SearchBar from "./comp/searchbar";
import BounceLoader from "react-spinners/BounceLoader";

class App extends React.Component {

  state = {
    articles: [],
    apiError: "",
    saerchTopic: "",
    totalRes: "",
    loading: false,
  }

  searchForTopic = async (topic) =>{
    try {
      this.setState({ loading: true });
      const response = await getArticles(topic);
      this.setState({
        articles: response.articles,
        searchTopic: topic,
        totalResults: response.totalResults,
      });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
    this.setState({ loading: false });
  }

  async componentDidMount() {
    try {
      const response = await getArticles();
      this.setState({ articles: response.articles });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }

  render() {
     const {articles, apiError, searchTopic, totalRes, loading} = this.state;
    
    return (
      <Container>
      <Header as="h2" style={{textAlign: "center", margin: 15}}>Search for Topic</Header>
      <SearchBar searchForTopic={this.searchForTopic} />
      <p style={{textAlign: "center"}}>
        News are from <a href="https://newsapi.org/">NewsAPI</a>
      </p>
      {loading && 
      <div style={{display: "flex", justifyContent: "center",height: "80px",}}>
        <BounceLoader size={40} color="aqua"/>
        <h4 style={{display: "flex", margin: "10px"}}>
          <b>Loading, Please Wait</b>
        </h4>
      </div>}
      {articles.length > 0 && <ArticleList articles={articles} />}
      {apiError && <p>Could not fetch any articles. Please try again.</p>}
    </Container>
    );
  }
}



export default App;
