import React from 'react';
import {useState} from 'react';

export default function Nav({createTopic}) {
  const [title, setTitle] = useState('');
  function handleChange (e) {
    setTitle(e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault();
    if(!title) return alert("title is empty");
    createTopic(title); //needs to be passed down
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className="nav-bar">
      <input type="text" value={title} className="nav-input" onChange={handleChange}/>
      <button type="submit" className="nav-sumbit">Add Topic</button>
    </form>
  );
}
