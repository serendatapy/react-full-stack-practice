import React from 'react';

export default function Topics({ topic, voteTopic, deleteTopic }) {
  const { _id, title, published_at, score } = topic;
  return (
    <div className="topic-card">
      <div className="score">
        <button onClick={() => voteTopic(_id, 1)}> Up </button>
        <p>{score}</p>
        <button onClick={() => voteTopic(_id, -1)}>Down</button>
      </div>
      <div className="topic-title">
        <h1>{title}</h1>
        <p>{published_at}</p>
      </div>
      <div className="topic-delete">
        <button onClick={() => deleteTopic(_id)}>Delete</button>
      </div>
    </div>
  );
}
