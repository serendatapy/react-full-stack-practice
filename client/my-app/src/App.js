import './App.css';
import { useEffect, useState } from 'react';
import TopicList from './component/TopicList';
import Nav from './component/Nav';
import apiService from './apiService';

function App() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    apiService.getTopics().then((topics) => setTopics(topics));
  }, []);

  function createTopic(title) {
    apiService.postTopic({ title }).then((topic) => {
      setTopics((topicList) => [...topicList, topic]);
    });
  }

  function deleteTopic(id) {
    apiService.deleteTopic(id).then(() => {
      setTopics((topicList) => topicList.filter((topic) => {
        return topic._id !== id
      }));
    });
  }

  function voteTopic(id, dir) {
    apiService.vote(id, dir).then((updatedTopic) => {
      setTopics((topicList) => {
        const topicToUpdate = topicList.find((topic) => topic._id === id);
        topicToUpdate.score = updatedTopic.score;
        return [...topicList];
      })
    });
  }

  return (
    <div className="app-body">
      <Nav createTopic={createTopic}/>
      <TopicList topics={topics} deleteTopic={deleteTopic} voteTopic={voteTopic} />
    </div>
  );
}

export default App;
