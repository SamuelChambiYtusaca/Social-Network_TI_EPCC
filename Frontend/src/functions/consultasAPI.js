const API = "http://localhost:5000/api";

export default API;
export const DOM = () =>{
  return "http://localhost:3000";
}

export const getId = () => {
  if(typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
      return JSON.parse(localStorage.getItem('jwt')).user._id;
  }
    return false;
}

export const apigetPublications = () => {
  return fetch(`${API}/p/list`, {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export const apigetPublicationsByUser = (id) => {
  return fetch(`${API}/p/postsbyuser/${id}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export const apicheckFile = (id) => {
  return fetch(`${API}/p/file/check/${id}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export const apigetDataFollow = (id, Userid) => {
  return fetch(`${API}/u/follow/check`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id,Userid})
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export const apipostStatusFollow = (id, Userid) => {
  return fetch(`${API}/u/follow/modify`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id,Userid})
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export const apigetLikes = (Postid) => {
  return fetch(`${API}/p/likes`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({Postid})
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export const apigetDataLike = (id, Postid) => {
  return fetch(`${API}/p/like/check`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id,Postid})
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export const apipostStatusLike = (id, Postid) => {
  return fetch(`${API}/p/like/modify`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id,Postid})
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export const apimodifyUser = (object) => {
  return fetch(`${API}/u/modify`, {
    method: "post",
    headers: {
      Accept: 'application/json',
    },
    body: object
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export const apicreatePost = (object) => {
  return fetch(`${API}/p/create`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
    },
    body: object
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export const apigetDataUser = (id) => {
  return fetch(`${API}/u/data/${id}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export const apigetPostSearched = (object) => {
  return fetch(`${API}/p/search`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}