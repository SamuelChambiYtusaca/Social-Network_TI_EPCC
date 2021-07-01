const API = "http://localhost:5000/api";

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