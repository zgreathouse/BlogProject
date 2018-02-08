import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions';

//components
import PostIndexItem from './PostIndexItem';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const { posts } = this.props;

    return posts.map(post => {
      return (
        <li key={post.title}>
          <PostIndexItem post={post} />
        </li>
      )
    })
  }

  render() {
    if(!this.props.posts) {
      return (
        <div></div>
      )
    }

    return (
      <div>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
