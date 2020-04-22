import React, { useEffect, useState } from 'react';

const url = 'https://api.github.com/search/repositories?q=stars:>2500+language:javascript&sort=stars&order=desc';

// full_name
// stargazers_count
// html_url
// id

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(res => res.items.map(({ full_name, stargazers_count, html_url, id }) => {
        return {
          full_name,
          stargazers_count,
          html_url,
          id
        }
      }))
      .then(repoList => setRepos(repoList))
      .catch(err => console.log(err));
  }, []);
  
  console.log(repos);

  return (
    <div>
      {
        !repos.length
          ? <div>Loading...</div>
          :
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Full Name</th>
                  <th>Stars</th>
                  <th>Link</th>
                </tr>
                {
                  repos.map((repo, i) => (
                    <tr key={i}>
                      <td>{repo.full_name}</td>
                      <td>{repo.stargazers_count}</td>
                      <td><a href={repo.html_url}>{repo.html_url}</a></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
      }
    </div>
  );
}

export default App;
