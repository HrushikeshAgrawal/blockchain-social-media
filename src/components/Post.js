import React, { Component } from "react";
import Identicon from "identicon.js";

import web3 from "../ethereum/web3";

export class Post extends Component {
  render() {
    const { author, id, tipAmount, content } = this.props.post;
    return (
      <div className="post">
        <div>
          <img
            className="avatar"
            src={`data:image/png;base64,${new Identicon(
              author,
              172
            ).toString()}`}
            alt="No Avatar..."
          />
        </div>
        <div className="postDetails">
          <p>Post By: {author}</p>
          <h1>{content}</h1>
          <div className="tips">
            <h3>Tips: {web3.utils.fromWei(tipAmount, "ether")} ETH</h3>
            <button onClick={() => this.props.tipPost(id)}>Tip 0.01 Eth</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
