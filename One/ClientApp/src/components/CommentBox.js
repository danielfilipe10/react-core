﻿import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class CommentBox extends Component {
    displayName = CommentBox.name

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
}

class CommentList extends React.Component {
    render() {
        return (
            <div className="commentList">
                <Comment author="Daniel Lo Nigro">
                    Hello ReactJS.NET World!
                </Comment>
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">
                    This is *another* comment
                </Comment>
            </div>        );
    }
}

class CommentForm extends React.Component {
    render() {
        return (
            <div className="commentForm">Hello, world! I am a CommentForm.</div>
        );
    }
}

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(<CommentBox />, document.getElementById('root'));

