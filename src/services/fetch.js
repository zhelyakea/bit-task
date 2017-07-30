
export function fetch_post (query) {
  return fetch(query)
  .then(function(data){
      return data.json()
  })
  .catch(function(err) {
  });
}
