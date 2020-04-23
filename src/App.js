import React, { Component } from "react";
import "./App.css";
import Identicon from "identicon.js";

import socialMedia from "./ethereum/socialMedia";
import web3 from "./ethereum/web3";

import Post from "./components/Post";
import NewPost from "./components/NewPost";

export class App extends Component {
  state = {
    userAccount: "None. Please install metamask and log in",
    title: "Connecting to Blockchain...",
    postCount: 0,
    posts: [],
    loading: true,
  };

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const title = await socialMedia.methods.appName().call();
    const postCount = await socialMedia.methods.postCount().call();
    this.setState({ userAccount: accounts[0], title, postCount });
    this.getPosts();
  }

  getPosts = async () => {
    let posts = [];
    for (var i = 1; i <= this.state.postCount; i++) {
      posts.push(await socialMedia.methods.posts(i).call());
    }
    posts = posts.reverse();
    this.setState({ posts, loading: false });
  };

  tipPost = async (id) => {
    this.setState({ loading: true });
    await socialMedia.methods
      .tipPost(id)
      .send({
        from: this.state.userAccount,
        value: web3.utils.toWei("0.01", "ether"),
      })
      .once("receipt", (receipt) => {
        window.location.reload();
      });
  };

  createPost = async (content) => {
    this.setState({ loading: true });
    await socialMedia.methods
      .createPost(content)
      .send({
        from: this.state.userAccount,
      })
      .once("receipt", (receipt) => {
        window.location.reload();
      });
  };

  render() {
    return (
      <div>
        <div className="header">
          <div>
            <h1>{this.state.title}</h1>
          </div>
          <div>
            <p>Current Account: {this.state.userAccount}</p>
            {this.state.userAccount !==
            "None. Please install metamask and log in" ? (
              <img
                width="50"
                height="50"
                src={`data:image/png;base64,${new Identicon(
                  this.state.userAccount,
                  50
                ).toString()}`}
                alt="No Avatar..."
              />
            ) : null}
          </div>
        </div>

        <div className="container">
          <h1 style={{ fontSize: "48px", color: "#17a2b8" }}>Posts</h1>
          {this.state.loading ? (
            <div className="hiddenSpinner"></div>
          ) : (
            <>
              <NewPost createPost={this.createPost} />
              {this.state.posts.map((post) => (
                <Post tipPost={this.tipPost} key={post.id} post={post} />
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
