pragma solidity ^0.6.6;


contract socialMedia {
    string public appName = "Blockchain Social Media";
    mapping(uint256 => Post) public posts;
    uint256 public postCount = 0;

    struct Post {
        uint256 id;
        string content;
        uint256 tipAmount;
        address payable author;
    }

    function createPost(string memory _content) public {
        require(bytes(_content).length > 0, "Please type something.");
        postCount++;
        posts[postCount] = Post(postCount, _content, 0, msg.sender);
    }

    function tipPost(uint256 _id) public payable {
        Post memory _post = posts[_id];
        address payable _author = _post.author;
        _author.transfer(msg.value);
        _post.tipAmount = _post.tipAmount + msg.value;
        posts[_id] = _post;
    }
}
