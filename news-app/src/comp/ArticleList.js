import React from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import {Link} from "react-router-dom";

export const ArticleItem = (e) => {
    const { article } = e;
    return (
        <List.Item style={{ padding: 35 }}>
          <Grid>
            <Grid.Column
              width={10}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}>
              <Header as="h3">{article.title}</Header>
              <List.Description style={{ margin: "20px 0" }}>
                {article.description}
              </List.Description>
              <List bulleted horizontal>
                <List.Item>
                  <a href={article.url}>{article.source.name}</a>
                </List.Item>
                <List.Item>{article.publishedAt.split("T")[0]}</List.Item>
                <List.Item>
                  <Link to="/ArticlePage">Read more</Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Image src={article.urlToImage} />
            </Grid.Column>
          </Grid>
        </List.Item>
      );
  };

export const ArticleList = (e) => {
    return (
        <List divided style = {{maxWidth: 1000, margin: "0 auto"}}>
            {e.articles.map((article, index) => (
                 <ArticleItem article={article} key={article.title + index} />
            ))}
        </List>
    )
};

