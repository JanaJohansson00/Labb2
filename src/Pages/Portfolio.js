import React, { useEffect, useState } from 'react';
import { fetchGithubRepos } from '../Components/GithubRepos';
import Menu from '../Components/Menu.js';

function Portfolio({ userName }) {
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchGithubRepos(userName).then((data) => {
      setRepoData(data);
      setLoading(false);
    });
  }, [userName]);

  return (
    <div id="portfolio-data">
      <h1>Mina Publika Projekt</h1>
      {loading ? (
        <p>Laddar...</p>
      ) : (
        <ul className="project-list">
          {repoData.map((repo) => (
            <li key={repo.id} className="project-item">
              <h4>{repo.name}</h4>
              <p>{repo.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Portfolio;
