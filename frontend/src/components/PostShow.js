import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//action creators
import { fetchPost, deletePost } from '../actions/postActions';

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    console.log(post);

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3 style={{marginTop: "30px"}}>{post.title}</h3>
        <p style={{
          marginTop: "20px",
          padding: "15px",
          border: "solid thin black",
          height: "200px"
        }}>{post.body}</p>
        <Link
          to="/"
          className="btn btn-primary"
          style={{marginTop: "20px"}}
        >
          Back to Index
        </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
          style={{marginTop: "20px"}}
        >
          Delete Post
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }, ownProps) => ({
  post: posts[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
