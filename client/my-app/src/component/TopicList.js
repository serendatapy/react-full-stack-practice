import React from 'react';
import Topic from './Topic';

export default function TopicList({ topics, deleteTopic, voteTopic }) {
  return (
    <div className="topic-list">
      {topics
        .sort((a, b) => (a.score < b.score ? 1 : -1))
        .map((topic) => (
          <Topic
            key={topic._id}
            topic={topic}
            deleteTopic={deleteTopic}
            voteTopic={voteTopic}
          />
        ))}
    </div>
  );
}
