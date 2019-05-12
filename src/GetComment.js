import React from 'react';

const getComments = () => [
    {
        name: "Bartosz Milewsi",
        avatar: "ava1",
        body: "I like functors.",
        comments: [
            {
                name: "JS Cheerleader",
                avatar: "ava2",
                body: "Functors are cool!"
            }
        ]
    }
];

const comment = ({name, avatar, body, comments = []}) => (
    <div className="comment">
        <img src={avatar} alt="avatar"/>
        <span className="user-name">{name}</span>
        <div className="comment-body">{body}</div>
        <div className="comments">{comments.map(comment)}</div>
    </div>
);

const GetComment = () => (
    <div className="GetComment">
        <div>{getComments().map(comment)}</div>
    </div>
)

export default GetComment;