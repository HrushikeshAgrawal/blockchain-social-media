import React, { Component } from "react";

export class NewPost extends Component {
  state = {
    newContent: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state.newContent);
  };

  render() {
    return (
      <div className="newPost">
        <h1>Create a post</h1>
        <form onSubmit={this.onSubmit}>
          <textarea
            value={this.state.newContent}
            onChange={(e) => {
              this.setState({ newContent: e.target.value });
            }}
            placeholder="Say spmething..."
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewPost;
