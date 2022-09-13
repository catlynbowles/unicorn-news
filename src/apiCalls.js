export const getArticles = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=KpGXEIs5cAOuYVP8yMXUB6KozjLLEkzC`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('not okay')
      }
    })
}