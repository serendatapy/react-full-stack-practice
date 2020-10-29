const baseURL = 'http://localhost:3001'

function getTopics() {
  return fetchRequest('/topics');
}

function postTopic (body) {
  return fetchRequest('/topics',{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

function deleteTopic (id) {
  return fetchRequest(`/topics/${id}`, {
    method: 'DELETE'
  })
}

function vote(id,dir) {
  return fetchRequest(`/topics/${id}/${dir}`, {
    method: 'PUT'
  })
}

function fetchRequest(path,options) {
  return fetch(baseURL+path, options)
  .then(res=>res.status < 400 ? res : Promise.reject())
  .then(res => res.status !== 204 ? res.json() : res)
  .catch(err => {
    console.error('Error:', err);
  })
}

export default {
  getTopics,
  postTopic,
  deleteTopic,
  vote,
}