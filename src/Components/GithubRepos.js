export const fetchGithubRepos = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching GitHub repos:', error);
    });
};
