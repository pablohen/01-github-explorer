import { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem';
import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>(
    [] as Repository[]
  );

  useEffect(() => {
    const fetchRepositories = () => {
      fetch('https://api.github.com/orgs/rocketseat/repos')
        .then((res) => res.json())
        .then((data) => setRepositories(data));
    };

    fetchRepositories();
  }, []);

  useEffect(() => {
    console.log(repositories);
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
};

export default RepositoryList;
