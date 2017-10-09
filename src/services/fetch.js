export function fetch_post(query) {
  return fetch(query)
    .then(data => data.json()
    )
    .catch(err => {})
}
